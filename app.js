require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const limiter = require('./middleware/rateLimit');

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(limiter);

app.use('/auth', require('./routes/auth'));
app.use('/api', require('./routes/url'));
app.use('/api/analytics', require('./routes/analytics'));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
