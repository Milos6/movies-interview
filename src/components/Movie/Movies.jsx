import React, { useEffect, useState } from 'react';

import MovieList from './MovieList.jsx';
import MovieService from '../../services/MovieService';
import MovieInputForm from './MovieInputForm.jsx';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MovieService.getMovies().map(movie => ({ ...movie, default: true, peopleRated: 1 })));
  }, []);

  const removeMovie = (id) => {
    setMovies(prev => prev.filter(movie => movie.id !== id));
  };

  const setRating = (id, rating) => {
    setMovies(prev => prev.map(movie => {
      if (movie.id === id) {
        let avg = movie.rating;
        let peopleRated = 0;
        if (movie.hasOwnProperty('peopleRated')) {
          peopleRated = movie.peopleRated;
        }

        avg = ((avg * peopleRated) + rating) / (peopleRated + 1);
        peopleRated += 1;

        return {
          ...movie,
          rating: avg,
          peopleRated: peopleRated
        }
      }
      return movie;
    }));
  };

  return (
    <div>
      <MovieInputForm setMovies={setMovies} />
      <hr />
      <div className='container-fluid' style={{ marginLeft: '-15px' }}>
        <div className='d-flex flex-row'>
          <div className='col-sm-12'>
            <MovieList movies={movies} removeMovie={removeMovie} setRating={setRating} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
