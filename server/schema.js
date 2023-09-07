const mongoose = require('mongoose');

const landingSiteSchema = new mongoose.Schema({
  health: Number,
  wealth: Number,
  happiness: Number,
  nodo: Number,
  sum: Number,
  change: Number,
  date: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const LandingSite = mongoose.model('LandingSite', landingSiteSchema);

module.exports = LandingSite;
