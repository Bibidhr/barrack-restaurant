const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, default: '' },
  guests: { type: Number, required: true, min: 1, max: 30, default: 2 },
  date: { type: String, required: true },
  time: { type: String, required: true },
  seating: { 
    type: String, 
    default: 'Rooftop Sky Terrace',
    enum: ['Rooftop Sky Terrace', 'Sunset Edge Table', 'Indoor Glass Lounge', 'Cocktail Bar Counter']
  },
  specialRequests: { type: String, default: '' },
  status: { 
    type: String, 
    default: 'confirmed',
    enum: ['confirmed', 'pending', 'cancelled'] 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Reservation', reservationSchema);
