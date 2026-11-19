const express = require('express');
const router = express.Router();
const { restaurantInfo } = require('../data/seedData');

// GET /api/info
router.get('/', (req, res) => {
  res.json({ success: true, data: restaurantInfo });
});

module.exports = router;
