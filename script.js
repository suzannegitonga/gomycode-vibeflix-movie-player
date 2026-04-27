document.addEventListener('DOMContentLoaded', () => {
  const API_KEY = window.TMDB_API_KEY || '';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

  const searchInput = document.getElementById('search-input');
  const movieGrid = document.getElementById('movie-grid');

  // ✅ NEW: Fetch popular movies on page load
  async function fetchPopularMovies() {
    if (!API_KEY) {
      movieGrid.innerHTML = '<p class="error-state">⚠️ API key not found. Check config.js</p>';
      return;
    }

    movieGrid.innerHTML = '<p class="loading-state">🎬 Loading popular movies...</p>';

    try {
      const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      const response = await fetch(url);
      
      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      
      const data = await response.json();
      renderMovies(data.results);
    } catch (error) {
      movieGrid.innerHTML = `<p class="error-state">❌ ${error.message}</p>`;
      console.error('Failed to fetch popular movies:', error);
    }
  }

  // ✅ UPDATED: Fetch movies from search
  async function fetchMovies(query) {
    const trimmedQuery = query.trim();
    
    if (!trimmedQuery) {
      // If search is cleared, show popular movies again
      fetchPopularMovies();
      return;
    }

    movieGrid.innerHTML = '<p class="loading-state">🔍 Searching...</p>';

    try {
      const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(trimmedQuery)}`;
      const response = await fetch(url);
      
      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      
      const data = await response.json();
      renderMovies(data.results);
    } catch (error) {
      movieGrid.innerHTML = `<p class="error-state">❌ ${error.message}</p>`;
      console.error('Failed to fetch movies:', error);
    }
  }

  // ✅ Render movie cards (unchanged)
  function renderMovies(movies) {
    movieGrid.innerHTML = '';

    if (!movies || movies.length === 0) {
      movieGrid.innerHTML = '<p class="empty-state">😔 No movies found. Try a different title.</p>';
      return;
    }

    movies.forEach(movie => {
      const posterUrl = movie.poster_path 
        ? `${IMG_BASE_URL}${movie.poster_path}` 
        : 'https://placehold.co/300x450/1f1f28/ffffff?text=No+Poster';
        
      const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

      const card = document.createElement('article');
      card.className = 'movie-card';
      card.id = `movie-card-${movie.id}`;
      card.setAttribute('data-movie-id', movie.id);

      card.innerHTML = `
        <img src="${posterUrl}" alt="${movie.title} movie poster" class="movie-poster" loading="lazy">
        <div class="movie-info">
          <h3 class="movie-title" title="${movie.title}">${movie.title}</h3>
          <p class="movie-rating">⭐ ${rating}/10</p>
        </div>
      `;

      card.addEventListener('click', () => {
        console.log(`User clicked movie ID: ${movie.id}`);
      });

      movieGrid.appendChild(card);
    });
  }

  // ✅ Load popular movies when page loads
  fetchPopularMovies();

  // Search with debounce
  function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }

  searchInput.addEventListener('input', debounce((e) => {
    fetchMovies(e.target.value);
  }, 500));
});