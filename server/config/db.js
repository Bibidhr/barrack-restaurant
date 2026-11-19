const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/barrack_restaurant';
  try {
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 2000,
    });
    isConnected = true;
    console.log(` MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.warn(`⚠️  MongoDB not available at ${mongoURI} (${error.message}). Running in lightweight memory-persisted fallback mode for zero-dependency demo.`);
    isConnected = false;
  }
};

module.exports = { connectDB, getIsConnected: () => isConnected };
