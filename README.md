# VibeFlix

A responsive movie discovery app built with vanilla HTML, CSS, and JavaScript, powered by The Movie Database (TMDb) API.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![TMDb API](https://img.shields.io/badge/TMDb_API-01D277?style=for-the-badge&logo=themoviedatabase&logoColor=white)

## About / Purpose

VibeFlix is a web application that allows users to discover and explore movies through an intuitive interface. Users can browse popular movies, search for specific titles, and view movie posters and details.

This project was created as a front-end development school project to practice responsive design, DOM manipulation, and REST API integration. It serves as a practical example for developers learning to build modern web applications without relying on heavy frameworks or libraries.

The target audience includes movie enthusiasts looking for a simple way to discover new films and developers interested in vanilla JavaScript implementations.

## ✨ Features

- ✅ Mobile-first responsive grid layout
- ✅ Live movie search with debounce
- ✅ Auto-loads popular movies on page load
- ✅ Dynamic poster rendering with fallbacks
- ✅ Smooth hover effects & glowing focus states
- ✅ Graceful error/empty/loading states

## 💻 Tech Stack

- **HTML5** (semantic structure)
- **CSS3** (Grid, Flexbox, custom properties, media queries)
- **Vanilla JavaScript** (ES6+, async/await, DOM manipulation)
- **TMDb API v3** (movie data & images)

*Note: No frameworks, build tools, or external libraries used*

## 🛠️ Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vibeflix.git
   cd vibeflix
   ```

2. Open `index.html` in your web browser.

*Note: The app requires a TMDb API key to function. See API Configuration below.*

## 🔑 API Configuration ⚠️

This project uses The Movie Database (TMDb) API to fetch movie data. You'll need to obtain a free API key:

1. Visit [TMDb](https://www.themoviedb.org/) and create an account
2. Go to your account settings and navigate to the "API" section
3. Request an API key for "Developer" use
4. Copy `config.example.js` to `config.js`
5. Replace `'YOUR_API_KEY_HERE'` in `config.js` with your actual API key

**Security note:** `config.js` is ignored via `.gitignore` to prevent API key exposure. Never commit your real key to public repositories.

## 📜 Attribution & Compliance

This project uses the TMDb API but is not endorsed or certified by TMDb.

This project was developed independently for a front-end development course. All API usage complies with TMDb's Developer Terms of Service.

## 🚀 Future Enhancements

- Movie detail modal with cast/trailer
- Genre filtering & sorting
- Local storage "Watchlist" feature
- Dark/light mode toggle
- Pagination or infinite scroll