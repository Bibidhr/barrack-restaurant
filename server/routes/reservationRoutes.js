const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const { getIsConnected } = require('../config/db');

// In-memory reservations fallback
let memoryReservations = [
  {
    _id: "demo_res_1",
    name: "Dipen Shrestha",
    phone: "+977 9841234567",
    email: "dipen@example.com",
    guests: 4,
    date: "2026-11-20",
    time: "18:30",
    seating: "Sunset Edge Table",
    specialRequests: "Anniversary celebration table with mountain view",
    status: "confirmed",
    createdAt: new Date().toISOString()
  }
];

// POST /api/reservations
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, guests, date, time, seating, specialRequests } = req.body;

    if (!name || !phone || !date || !time) {
      return res.status(400).json({
        success: false,
        error: 'Please provide full name, phone number, date, and preferred time.'
      });
    }

    const newReservationData = {
      name: name.trim(),
      phone: phone.trim(),
      email: email ? email.trim() : '',
      guests: Number(guests) || 2,
      date,
      time,
      seating: seating || 'Rooftop Sky Terrace',
      specialRequests: specialRequests || '',
      status: 'confirmed',
      createdAt: new Date()
    };

    if (getIsConnected()) {
      const reservation = await Reservation.create(newReservationData);
      return res.status(201).json({
        success: true,
        message: 'Table reservation confirmed successfully at Barrack Rooftop Lounge!',
        data: reservation
      });
    }

    // Fallback store
    const mockReservation = {
      _id: 'res_' + Date.now(),
      ...newReservationData
    };
    memoryReservations.unshift(mockReservation);

    return res.status(201).json({
      success: true,
      message: 'Table reservation confirmed successfully at Barrack Rooftop Lounge!',
      data: mockReservation
    });

  } catch (err) {
    console.error('Error creating reservation:', err);
    res.status(500).json({ success: false, error: 'Failed to process reservation.' });
  }
});

// GET /api/reservations (for demo inspection)
router.get('/', async (req, res) => {
  try {
    if (getIsConnected()) {
      const reservations = await Reservation.find().sort({ createdAt: -1 }).limit(20);
      return res.json({ success: true, count: reservations.length, data: reservations });
    }
    return res.json({ success: true, count: memoryReservations.length, data: memoryReservations });
  } catch (err) {
    console.error('Error fetching reservations:', err);
    res.status(500).json({ success: false, error: 'Failed to fetch reservations.' });
  }
});

module.exports = router;
