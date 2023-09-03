// models/Player.js

const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  team: String,
  position: String,
  value: Number
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
