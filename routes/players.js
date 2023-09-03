const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

// Create
router.post('/', async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();
    res.status(201).json(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read all players or filter based on query
router.get('/', async (req, res) => {
    try {
      const query = req.query; // Query parameters as an object. For example, { team: 'ATL', firstName: 'Karl' }
      const players = await Player.find(query); // Use the query parameters directly in MongoDB find
      res.status(200).json(players);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

// Read individual player
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findById(id);
    if (!player) return res.status(404).json({ error: 'Player not found' });
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findByIdAndUpdate(id, req.body, { new: true });
    if (!player) return res.status(404).json({ error: 'Player not found' });
    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Player.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Player not found' });
    return res.status(204).send("Player deleted");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
