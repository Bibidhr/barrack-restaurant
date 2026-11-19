const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const { connectDB } = require('./config/db');
const menuRoutes = require('./routes/menuRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const infoRoutes = require('./routes/infoRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// API Routes
app.use('/api/menu', menuRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/info', infoRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    restaurant: 'Barrack Restaurant & Rooftop Lounge (Copacabana Gairidhara)',
    time: new Date().toISOString()
  });
});

// Serve static frontend build if present
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) {
    return next();
  }
  const indexPath = path.join(clientDistPath, 'index.html');
  res.sendFile(indexPath, (err) => {
    if (err) {
      res.status(200).send('Barrack Restaurant MERN Backend is running. Launch Vite frontend at http://localhost:5173');
    }
  });
});

// Start server
const server = app.listen(PORT, () => {
  console.log(`🚀 Barrack Restaurant Express Server running on http://localhost:${PORT}`);
  console.log(`📡 API Endpoints available at http://localhost:${PORT}/api/menu, /api/reservations, /api/info`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`\n⚠️  Port ${PORT} is already in use by another running process.`);
    console.error(`   To free it, run: lsof -ti :${PORT} | xargs kill -9`);
    console.error(`   Or run on a different port: PORT=5002 npm start\n`);
    process.exit(1);
  } else {
    throw err;
  }
});
