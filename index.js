const express = require('express');
const morgan = require('morgan');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/user.routes');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(morgan('dev'));

// Connect to Database
connectDB();

app.get('/', (req, res) => {
  res.send('CRUD APP running on PORT ' + PORT);
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});