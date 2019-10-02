let movies = [
  {
    id: 1570004517340,
    title: 'Matrix',
    score: 10,
  },
  {
    id: 1570004517341,
    title: 'Avengers',
    score: 10,
  },
  {
    id: 1570004517342,
    title: 'IronMan',
    score: 9,
  },
  {
    id: 1570004517343,
    title: 'DoubleTarget',
    score: 7,
  },
  {
    id: 15700045173405,
    title: 'Kindom',
    score: 8,
  },
];

const getMovies = () => movies;

const getById = id => {
  const filterMovies = movies.filter(movie => id === movie.id);
  return filterMovies[0];
};

const addMovie = (title, score) => {
  const id = parseFloat(new Date().getTime(), 10);
  const newMovie = {
    id,
    title,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};

const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export { getMovies, getById, addMovie, deleteMovie };
