import React, { useEffect, useState } from 'react';

import MovieList from './MovieList.jsx';
import MovieService from '../../services/MovieService';
import MovieInputForm from './MovieInputForm.jsx';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MovieService.getMovies().map(movie => ({...movie, default: true})));
  }, []);

  const removeMovie = (id) => {
    // console.log("remove: ",id)
    setMovies(prev => prev.filter(movie => movie.id!==id))
  }

  return (
    <div>
      <MovieInputForm setMovies={setMovies} />
      <hr/>
      <div className='container-fluid' style={{ marginLeft: '-15px' }}>
        <div className='d-flex flex-row'>
          <div className='col-sm-12'>
            <MovieList movies={movies} removeMovie={removeMovie}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
