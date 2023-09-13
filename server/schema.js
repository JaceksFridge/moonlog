const mongoose = require('mongoose');

const scoreLogSchema = new mongoose.Schema({
  health: Number,
  wealth: Number,
  happiness: Number,
  nodo: Number,
  sum: Number,
  change: Number,
  subscores: {
    health: {},
    wealth: {},
    happiness: {},
    nodo: {}
  },
  date: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const ScoreLog = mongoose.model('ScoreLog', scoreLogSchema);

module.exports = ScoreLog;
