import React, { useEffect, useState } from 'react';

import MovieList from './MovieList.jsx';
import MovieService from '../../services/MovieService';
import MovieInputForm from './MovieInputForm.jsx';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  return (
    <div>
      <MovieInputForm setMovies={setMovies} />
      <hr/>
      <div className='container-fluid' style={{ marginLeft: '-15px' }}>
        <div className='d-flex flex-row'>
          <div className='col-sm-12'>
            <MovieList movies={movies} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
