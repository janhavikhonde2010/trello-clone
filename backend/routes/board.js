const express = require('express');
const Board = require('../models/Board');
const auth = require('../middleware/auth');
const router = express.Router();

// Create Board
router.post('/', auth, async (req, res) => {
  const { title } = req.body;
  try {
    const newBoard = new Board({ title, owner: req.user.id });
    await newBoard.save();
    res.json(newBoard);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Get User Boards
router.get('/', auth, async (req, res) => {
  try {
    const boards = await Board.find({ owner: req.user.id });
    res.json(boards);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
