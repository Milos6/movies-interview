import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard.jsx';

const getMovies = (movies, removeMovie, setRating) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} removeMovie={removeMovie} setRating={setRating} />
    ))}
  </div>
);

const MovieList = ({ movies, removeMovie, setRating }) => <div>{getMovies(movies, removeMovie, setRating)}</div>;

MovieList.defaultProps = {
  movies: [],
  removeMovie: () => {},
  setRating: () => {},
};

MovieList.propTypes = {
  movies: PropTypes.array,
  removeMovie: PropTypes.func,
  setRating: PropTypes.func
};

export default MovieList;
