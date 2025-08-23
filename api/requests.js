function fetchGenres() {
  return window.api
    .get("/genre/movie/list", {
      params: { language: "ko-KR" },
    })
    .then((res) => {
      console.log("Genres:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.error("Error fetching genres:", err);
    });
}


function getMovieByGenre(genreId) {
  return window.api
    .get("/discover/movie", {
      params: {
        with_genres: genreId,
        language: "ko-KR",
      },
    })
    .then((res) => {
      console.log("Movies by genre:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.error("Error fetching movies by genre:", err);
    });
}

function searchMovie(query) {
  return window.api
    .get("/search/movie", {
      params: {
        query: query,
        language: "ko-KR",
      },
    })
    .then((res) => {
      console.log("Search results:", res.data);
      return res.data;
    })
    .catch((err) => {
      console.error("Error searching for a movie:", err);
    });
}


// 전역 함수로 등록
window.fetchGenres = fetchGenres;
window.getMovieByGenre = getMovieByGenre;
window.searchMovie = searchMovie;