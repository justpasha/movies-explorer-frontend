const BASE_URL = 'https://api.movies-exp.dproject.nomoredomains.club';

const checkResponse = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(console.log(`Произошла ошибка ${res.status}`));
};

const headers = {
  'Content-Type': 'application/json',
};

const getHeaders = (token) => {
  return {
    ...headers,
    Authorization: `Bearer ${token}`,
  };
};

export const getUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: getHeaders(token),
    method: 'GET',
  }).then(checkResponse);
};

export const editUserData = (data, token) => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: getHeaders(token),
    method: 'PATCH',
    body: JSON.stringify({
      email: data.email,
      name: data.name,
    }),
  }).then(checkResponse);
};

export const getMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    headers: getHeaders(token),
    method: 'GET',
  }).then(checkResponse);
};

export const createMovie = (
  {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN,
    id,
  },
  token,
  mainUrl
) => {
  return fetch(`${BASE_URL}/movies`, {
    headers: getHeaders(token),
    method: 'POST',
    body: JSON.stringify({
      country,
      director,
      duration,
      year,
      description,
      image: `${mainUrl}${image.url}`,
      trailer: trailerLink,
      nameRU,
      nameEN,
      thumbnail: `${mainUrl}${image.formats.thumbnail.url}`,
      movieId: id,
    }),
  }).then(checkResponse);
};

export const deleteMovie = (movieId, token) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    headers: getHeaders(token),
    method: 'DELETE',
  }).then(checkResponse);
};

export const register = ({ email, password, name }) => {
  return fetch(`${BASE_URL}/signup`, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
      name,
    }),
  }).then(checkResponse);
};

export const authorize = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(checkResponse);
};
