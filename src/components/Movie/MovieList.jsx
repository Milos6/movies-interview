import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard.jsx';

const getMovies = (movies, removeMovie) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} removeMovie={removeMovie} />
    ))}
  </div>
);

const MovieList = ({ movies, removeMovie }) => <div>{getMovies(movies, removeMovie)}</div>;

MovieList.defaultProps = {
  movies: [],
  removeMovie: () => {},
};

MovieList.propTypes = {
  movies: PropTypes.array,
  removeMovie: PropTypes.func
};

export default MovieList;
