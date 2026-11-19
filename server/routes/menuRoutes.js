const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');
const { initialMenuItems } = require('../data/seedData');
const { getIsConnected } = require('../config/db');

// In-memory store fallback
let memoryMenuItems = [...initialMenuItems];

// GET /api/menu
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;

    if (getIsConnected()) {
      // Check if DB needs seed
      const count = await MenuItem.countDocuments();
      if (count === 0) {
        await MenuItem.insertMany(initialMenuItems);
      }

      let query = {};
      if (category && category !== 'all') {
        query.category = category;
      }
      const items = await MenuItem.find(query).sort({ popular: -1, createdAt: -1 });
      return res.json({ success: true, count: items.length, data: items });
    }

    // Fallback in-memory
    let items = memoryMenuItems;
    if (category && category !== 'all') {
      items = memoryMenuItems.filter(i => i.category === category);
    }
    return res.json({ success: true, count: items.length, data: items });
  } catch (err) {
    console.error('Error fetching menu items:', err);
    res.status(500).json({ success: false, error: 'Failed to fetch menu items' });
  }
});

module.exports = router;
