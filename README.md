# The Barrack Restaurant & Rooftop Lounge — MERN Demo Application

An elegant, high-performance demo page for **The Barrack Restaurant & Rooftop Lounge** (Copacabana Gairidhara, Kathmandu) built with the **MERN Stack** (MongoDB, Express, React, Node.js) and **Framer Motion**.

Featuring genuine Google venue photography, 360° panoramic sunset rooftop vistas, an interactive menu explorer, and table reservation booking.

---

## 🛠️ Tech Stack

- **Frontend (Client)**:
  - **React 18** with **Vite**
  - **Framer Motion** for smooth, physics-based UI transitions (hero entrance, category pill slides, modal scale-up, photo lightbox)
  - **Tailwind CSS** for responsive luxury styling
  - **Lucide React** for clean vector icons
- **Backend (Server)**:
  - **Node.js** & **Express.js**
  - **MongoDB / Mongoose**:
    - Schema models for `MenuItem` and `Reservation`
    - Graceful zero-dependency fallback (works with or without a running MongoDB daemon)
  - **RESTful API**:
    - `GET /api/menu` — Retrieve categorized dishes and pricing
    - `POST /api/reservations` — Book a rooftop table
    - `GET /api/reservations` — Query active reservations
    - `GET /api/info` — Venue details, contact, timings, Google Maps links

---

## 🚀 Quick Start

### 1. Install All Dependencies
```bash
npm run install:all
```
*(Or individually run `cd server && npm install` and `cd client && npm install`)*

### 2. Run in Development Mode
Runs both the Express API and Vite React frontend with Hot Module Replacement (HMR):
```bash
npm run dev
```
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5001](http://localhost:5001)

### 3. Run in Production Mode
Builds the optimized React client and serves everything from Express on a single port:
```bash
npm start
```
Access the application at [http://localhost:5001](http://localhost:5001).

---

## 📸 Venue Features & Google Assets

The demo incorporates real venue photos and details from **The Barrack Rooftop Lounge** (Gairidhara, Kathmandu):
- **360° Panoramic Valley Sunset View**: 6th Floor Rooftop, Everest Bank Building
- **Food & Drink Highlights**: Himalayan Wood-Fired Mutton Sekuwa, The Grand Latino Platter, Brazilian Coxinhas, and Daily 1+1 Sunset Happy Hour Cocktails
- **Atmosphere**: Open-air sky terrace, plant-adorned indoor lounge, and live acoustic music sessions
- **Google Reviews**: 4.6★ rating with verified customer testimonials

---

## 🗄️ Database Configuration

By default, the server connects to:
```env
MONGODB_URI=mongodb://localhost:27017/barrack_restaurant
```
- If MongoDB is available, Mongoose connects and seeds initial menu items automatically.
- If MongoDB is not running locally, the server activates its embedded in-memory database fallback so the demo works right out of the box with zero setup hurdles.
