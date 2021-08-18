export const filterByTitle = (movieArr, filterWord) => {
  return movieArr.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(filterWord.toLowerCase());
  });
};

export const filterByDuration = (movieArr) => {
  return movieArr.filter((movie) => movie.duration <= 40);
};
