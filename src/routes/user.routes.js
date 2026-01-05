const express = require('express');
const { signup, login } = require('../controller/user.controller');
const auth = require('../config/auth');

const router = express.Router();


router.post('/register', signup);
router.post('/login', login);


module.exports = router;