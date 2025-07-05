# 🍕 PizzaPe

> *Your pizza, your pin — delivered in a tap.*

**PizzaPe** is a mobile-friendly pizza ordering web app built with React and Tailwind CSS. It delivers a smooth user experience by fetching pizzas from a live API and auto-detecting the user's location for quick, address-free delivery setup.

---

## 🚀 Features

- 📦 Browse a live pizza menu from an external API
- 📍 Detect current location with the browser's Geolocation API
- 🗺️ Convert coordinates into delivery-ready addresses using reverse geocoding
- 🧾 Place orders with either auto-filled or manual address input
- 📱 Fully responsive UI, optimized for all screen sizes
- ⚡ 100% client-side — no backend required

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Hooks, Functional Components)
- **Styling:** Tailwind CSS (Utility-first)
- **APIs:**
  - [`React Fast Pizza API`](https://react-fast-pizza-api.jonas.io/api)
  - [`BigDataCloud Reverse Geocoding API`](https://www.bigdatacloud.net)
  - Browser-native `navigator.geolocation`

## 🌐 Live Demo

> _Deploy on Vercel_
**🔗 [PizzaPe Live](https://pizzape.vercel.app/)**

---

## 📁 Getting Started

To clone and run this project locally:

```bash
git clone https://github.com/your-username/pizzape.git
cd pizzape
npm install
npm start
