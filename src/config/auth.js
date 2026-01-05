const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (e) {
        console.error("Token verification failed:", e);
        res.status(401).json({ message: "Token is not valid" });
    }
};

module.exports = isAuth;