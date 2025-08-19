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




// 전역 함수로 등록
window.fetchGenres = fetchGenres;
window.getMovieByGenre = getMovieByGenre;