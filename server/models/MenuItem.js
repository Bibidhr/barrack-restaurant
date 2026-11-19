const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { 
    type: String, 
    required: true
  },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, default: 'NPR' },
  badge: { type: String, default: '' },
  image: { type: String, default: '' },
  isVeg: { type: Boolean, default: false },
  popular: { type: Boolean, default: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
