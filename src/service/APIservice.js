//https://api.themoviedb.org/3/movie/550?api_key=0753d31482992eaeca4a1269ff45804b

//1. Search
//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher
//2. Query For Details   id=343611
//https://api.themoviedb.org/3/movie/343611?api_key={api_key}

import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '0753d31482992eaeca4a1269ff45804b';
const SEARCH_URL = `${BASE_URL}/search/movie`;

export async function getTrendingFilms() {
  try {
    //https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>
    const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&include_adult=true`;
    return await axios.get(url).then(response => {
      return response.data;
    });
  } catch (error) {
    console.log('error: ', error.message);
  }
}
export async function getSearchFilms(query, page = 1) {
  try {
    //https://api.themoviedb.org/3/search/movie?api_key={api_key}&language=en-US&query=Jack+Reacher
    const url = `${SEARCH_URL}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=true`;
    return await axios.get(url).then(response => {
      // console.log('getSearchFilms', response.data);
      return response.data;
    });
  } catch (error) {
    console.log('error: ', error.message);
  }
}

export async function getFilmById(filmId) {
  try {
    //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
    const url = `${BASE_URL}/movie/${filmId}?api_key=${API_KEY}&language=en-US&include_adult=true`;
    return await axios.get(url).then(response => {
      return response.data;
    });
  } catch (error) {
    console.log('error: ', error.message);
  }
}

//movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.

export async function getCreditsFilmById(filmId) {
  try {
    //https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
    const url = `${BASE_URL}/movie/${filmId}/credits?api_key=${API_KEY}&language=en-US`;
    return await axios.get(url).then(response => {
      return response.data;
    });
  } catch (error) {
    console.log('error: ', error.message);
  }
}

//movies/get-movie-reviews запрос обзоров для страницы кинофильма.
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export async function getReviewsFilmById(filmId) {
  try {
    const url = `${BASE_URL}/movie/${filmId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    return await axios.get(url).then(response => {
      return response.data;
    });
  } catch (error) {
    console.log('error: ', error.message);
  }
}
