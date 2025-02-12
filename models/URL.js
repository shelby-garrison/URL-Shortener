const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
  userId: String,
  longUrl: String,
  shortUrl: String,
  alias: { type: String, unique: true },
  topic: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('URL', URLSchema);
