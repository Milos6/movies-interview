import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating.jsx';

const MovieInputForm = ({ setMovies }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [errors, setErrors] = useState([]);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    checkValue('title', title);
    checkValue('subtitle', subtitle);
    checkValue('description', description);
    checkValue('imageUrl', imageUrl);
    setSubmitted(true);
  };

  useEffect(() => {
    if (errors.length === 0 && submitted) {
      setMovies(prev => [...prev, {
        id: title + Math.random(),
        title: title,
        subtitle: subtitle,
        description: description,
        imageUrl: imageUrl,
        rating: 0,
        peopleRated: 0,
      }]);
      setSubmitted(false);
    }
  }, [errors, submitted]);

  const checkValue = (key, value) => {
    if (value.trim().length === 0) {
      setErrors(prev => ([...prev, key]));
      return;
    }
    setErrors(prev => {
      return prev.filter((element) => {
        return element !== key;
      });
    });
  };


  return (
    <div>
      {errors}
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset style={{ display: 'flex', flexDirection: 'column', width: '25rem', minWidth: '300px' }}>
          <legend>Insert new movie:</legend>
          <label htmlFor='title'>Title:</label>
          <input
            id='title'
            name='title'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              checkValue('title', e.target.value);
            }}
            type='text'
          />
          {errors.includes('title') &&
          <span style={{ color: 'red' }}>Required</span>
          }
          <label htmlFor='subtitle'>Subtitle:</label>
          <input

            id='subtitle'
            name='subtitle'
            value={subtitle}
            onChange={(e) => {
              setSubtitle(e.target.value);
              checkValue('subtitle', e.target.value);
            }}
            type='text'
          />
          {errors.includes('subtitle') &&
          <span style={{ color: 'red' }}>Required</span>
          }
          <label htmlFor='description'>Description:</label>
          <input

            id='description'
            name='description'
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              checkValue('description', e.target.value);
            }}
            type='text'
          />
          {errors.includes('description') &&
          <span style={{ color: 'red' }}>Required</span>
          }
          <label htmlFor='imageUrl'>ImageUrl:</label>
          <input

            id='imageUrl'
            name='imageUrl'
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
              checkValue('imageUrl', e.target.value);
            }}
            type='text'
          />
          {errors.includes('imageUrl') &&
          <span style={{ color: 'red' }}>Required</span>
          }
        </fieldset>
        <input disabled={errors.length !== 0} type='submit' value='Submit' />
      </form>

    </div>
  );
};

MovieInputForm.propTypes = {
  setMovie: PropTypes.func,
};

export default MovieInputForm;
