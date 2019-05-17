/* eslint-disable no-underscore-dangle */
import React from 'react';
import './App.css';
import Movie from './Movie';

class App extends React.Component {
  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render -> componentDidUpdate()
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this._getMovies();
  }

  // Asynchronous function
  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies,
    });
  };

  _callApi = () => {
    return fetch(
      'https://yts.am/api/v2/list_movies.json?sort_by=download_count',
    )
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  _renderMovies = () => {
    const { movies } = this.state;
    return movies.map(movie => {
      console.log(movie);
      return (
        <Movie
          title={movie.title}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? 'App' : 'App--loading'}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
