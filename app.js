require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const limiter = require('./middleware/rateLimit');
const PORT = process.env.PORT||3000;
connectDB();

const app = express();
app.set('trust proxy', 1);

app.use(cors());
app.use(express.json());
app.use(limiter);

app.use('/auth', require('./routes/auth'));
app.use('/api', require('./routes/url'));
app.use('/api/analytics', require('./routes/analytics'));

app.listen(3000, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
  