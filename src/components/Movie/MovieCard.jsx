import React from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating.jsx';
import RatingBadge from './RatingBadge.jsx';

const MovieCard = ({ movie, removeMovie, setRating }) => (
  <div className="movie-card">
    {!movie.default &&
      <button onClick={()=>removeMovie(movie.id)}>x</button>
    }
    <div className="movie-card card">
      <img className="card-img-top" src={movie.imageUrl} alt="" />
      <div className="card-body">
        <h4 className="card-title">{movie.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
        <p className="text-justify" style={{ fontSize: '14px' }}>
          {movie.description}
        </p>
      </div>
      <div className="card-footer">
        <div className="clearfix">
          <div className="float-left mt-1">
            <StarRating rating={movie.rating} setRating={setRating} id={movie.id}/>
          </div>
          <RatingBadge peopleRated={movie.peopleRated} rating={movie.rating}/>
        </div>
      </div>
    </div>
  </div>
);

MovieCard.defaultProps = {
  movie: [],
  removeMovie: () => {},
  setRating: () => {}
};

MovieCard.propTypes = {
  movie: PropTypes.object,
  removeMovie: PropTypes.func,
  setRating: PropTypes.func,
};

export default MovieCard;
