const mongoose = require('mongoose');

const VisitSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
  },
  ip: {
    type: String,
    required: true,
    trim: true,
  },
  userAgent: {
    type: String,
    required: true,
    trim: true,
  },
});

const Visit = mongoose.model('Visit', VisitSchema);
module.exports = Visit;