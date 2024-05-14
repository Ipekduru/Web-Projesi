document.addEventListener('DOMContentLoaded', function() {
    var data = null;
  
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
  
    xhr.addEventListener('readystatechange', function() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) {
          const response = JSON.parse(this.responseText);
          displayMovies(response.result);
        } else {
          console.error('Error fetching data:', this.statusText);
        }
      }
    });
  
    xhr.open('GET', 'https://api.collectapi.com/watching/imdb');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.setRequestHeader('authorization', 'https://collectapi.com/tr/api/id_5de4ed043bd77a29edcfeb67?tab=pricing'); // Replace 'your_token' with your actual API key
  
    xhr.send(data);
  
    function displayMovies(movies) {
      const movieContainer = document.getElementById('movieContainer');
  
      movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
  
        movieCard.innerHTML = `
          <img src="${movie.img}" alt="${movie.name}">
          <div class="movie-info">
            <h2>${movie.name}</h2>
            <p><strong>Year:</strong> ${movie.year}</p>
            <p><strong>Rating:</strong> ${movie.rate}</p>
            <a href="${movie.url}" target="_blank">View on IMDB</a>
          </div>
        `;
  
        movieContainer.appendChild(movieCard);
      });
    }
  });