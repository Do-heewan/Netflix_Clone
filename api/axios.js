// import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params : {
        api_key : MOVIE_API_KEY,
        // accept: "application/json",
        // Authorization: `Bearer ${MOVIE_API_KEY}`,
        language : "ko-KR",
    },
});

// export default instance;
window.api = instance;