const moviePanel = document.querySelector(".movie-pannel");
const genreSelect = document.getElementById("genre-select"); 
const sortSelect = document.getElementById("sort-select");

// 영화가 보여질 컨테이너 생성
const movieGrid = document.createElement("div");
movieGrid.classList.add("movie-grid");
moviePanel.appendChild(movieGrid);

// 가져온 영화 데이터 저장
let currentMovies = [];

// 드롭다운 선택하여 영화 불러오기
genreSelect.addEventListener("change", async (e) => {
  const genreId = e.target.value;
  const data = await getMovieByGenre(genreId);
  currentMovies = data.results;
  const sortBy = sortSelect.value;
  renderMovies(sortMovies(currentMovies, sortBy));
});

// 영화들을 그리드로 렌더링하는 함수
function renderMovies(movies) {
  movieGrid.innerHTML = ""; // 기존 영화 목록 초기화

  movies.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img 
        src="https://image.tmdb.org/t/p/w300${movie.poster_path}" 
        alt="${movie.title}" 
      />
    `;

    movieGrid.appendChild(card);
  });
}

// 정렬 함수
function sortMovies(movies, sortBy) {
    const sorted = [...movies];
    if (sortBy === "popularity") {
        sorted.sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === "release_date") {
        sorted.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    }
    return sorted;
}

// 정렬 핸들러 클릭시
sortSelect.addEventListener("change", () => {
  renderMovies(sortMovies(currentMovies, sortSelect.value));
});

// 초기 렌더링
window.addEventListener("DOMContentLoaded", async () => {
  const defaultGenreId = genreSelect.value;
  const data = await getMovieByGenre(defaultGenreId);
  currentMovies = data.results; 
  renderMovies(sortMovies(currentMovies, sortSelect.value)); 
});