const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const { initialMenuItems } = require('../server/data/seedData');

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    restaurant: 'The Barrack Restaurant & Rooftop Lounge (Copacabana Gairidhara)',
    time: new Date().toISOString()
  });
});

// Menu endpoint
app.get('/api/menu', (req, res) => {
  try {
    const { category } = req.query;
    let items = initialMenuItems;
    if (category && category !== 'all') {
      items = initialMenuItems.filter((i) => i.category === category);
    }
    return res.json({ success: true, count: items.length, data: items });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Failed to fetch menu items' });
  }
});

// Restaurant Info endpoint
app.get('/api/info', (req, res) => {
  res.json({
    success: true,
    data: {
      name: 'The Barrack Restaurant & Rooftop Lounge',
      brand: 'Copacabana Kathmandu',
      tagline: 'Savor Himalayan Grill & 360° Valley Sunsets',
      location: '6th Floor Rooftop, Everest Bank Building, Gairidhara Sadak, Kathmandu',
      phone: '+977 981-0786445',
      hours: 'Daily 12:00 PM – 11:30 PM (Kitchen closes at 10:30 PM)',
      coordinates: { lat: 27.7172, lng: 85.324 },
      features: [
        '360° Himalayan Mountain & Kathmandu Valley Sunset Panoramas',
        'Wood-Fired Mutton Sekuwa & Charcoal Hearth Grill',
        '1+1 Daily Sunset Happy Hour (4:00 PM – 8:00 PM)',
        'Open-Air Sky Terrace & Covered Botanical Lounge',
        'Dedicated Elevator Access & Free Ground Guest Parking'
      ]
    }
  });
});

// Reservation endpoint
app.post('/api/reservations', (req, res) => {
  try {
    const { name, phone, email, guests, date, time, seating, specialRequests } = req.body;

    if (!name || !phone || !date || !time) {
      return res.status(400).json({
        success: false,
        error: 'Please provide full name, phone number, date, and preferred time.'
      });
    }

    const reservation = {
      _id: 'res_' + Date.now(),
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : '',
      guests: Number(guests) || 2,
      date,
      time,
      seating: seating || 'Rooftop Sky Terrace',
      specialRequests: specialRequests || '',
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    return res.status(201).json({
      success: true,
      message: 'Table reservation confirmed successfully at Barrack Rooftop Lounge!',
      data: reservation
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: 'Failed to process reservation' });
  }
});

// Catch-all 404 for unmatched API routes
app.all('/api/*', (req, res) => {
  res.status(404).json({ success: false, error: 'API endpoint not found' });
});

module.exports = app;
