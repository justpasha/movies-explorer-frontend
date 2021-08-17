const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const checkResponse = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(console.log(`Произошла ошибка ${res.status}`));
};

const headers = {
  'Content-Type': 'application/json',
};

export const getAllMovies = () => {
  return fetch(`${BASE_URL}`, {
    headers,
    method: 'GET',
  }).then(checkResponse);
};
