/* eslint-disable react/no-multi-comp */
import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LineEllipsis from 'react-lines-ellipsis';

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <LineEllipsis
          className="Movie__Synopsis"
          text={synopsis}
          maxLine="3"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
    </div>
  );
}

function MoviePoster({ alt, poster }) {
  return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />;
}

function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre}</span>;
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
};

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default Movie;
