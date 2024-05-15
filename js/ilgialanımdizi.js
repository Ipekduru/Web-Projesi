const apiKey = "0f4d3f81e810296782b6e8cd364e6318";
const baseUrl = "https://api.themoviedb.org/3";
const searchEndpoint = "/search/movie";
const query = "Batman";

// API'ye GET isteği gönderen fonksiyon
async function searchMovies() {
    try {
        const response = await fetch(`${baseUrl}${searchEndpoint}?query=${query}&api_key=${apiKey}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
    }
}

// API'den gelen verileri işleyen ve HTML'e ekleyen fonksiyon
async function handleApiResponse() {
    const searchData = await searchMovies();
    const moviesContainer = document.getElementById("movies");

    // Her bir film için ayrı bir div oluştur
    searchData.results.forEach(movie => {
        const movieTitle = movie.title;
        const movieOverview = movie.overview;

        // Her film için bir div oluştur
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        // Başlık ve özeti içeren paragrafları oluştur
        const titleParagraph = document.createElement("p");
        titleParagraph.textContent = movieTitle;

        const overviewParagraph = document.createElement("p");
        overviewParagraph.textContent = movieOverview;

        // Paragrafları div'e ekle
        movieDiv.appendChild(titleParagraph);
        movieDiv.appendChild(overviewParagraph);

        // Div'i moviesContainer'a ekle
        moviesContainer.appendChild(movieDiv);
    });
}

// Fonksiyonu çağır
handleApiResponse();