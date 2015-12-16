var React = require('react');
var MovieStore = require('../stores/movieList');
var ApiUtil = require('../util/apiUtil');
var MovieIndexItem = require('./movieIndexItem');
var Search = require('./movieSearch');

var MoviesIndex = React.createClass({
  getInitialState: function () {
    return { movies: MovieStore.all() };
  },

  _onChange: function () {
    this.setState({ movies: MovieStore.all() });
  },

  componentDidMount: function () {
    this.movieListener = MovieStore.addListener(this._onChange);
  },

  componentWillUnmount: function () {
    this.movieListener.remove();
  },

  render: function () {
    return (
      <div className="ui center aligned three column grid">
        <Search/>
        <ul className="ui medium images" id="grid-images">
          {this.state.movies.map(function (movie) {
            return (
              <MovieIndexItem 
              movie={movie} 
              key={movie["imdbID"]}
              posterLink={"http://img.omdbapi.com/?i=" + movie["imdbID"] + "&apikey=32fa0dab&h=1000"}
              />
              )
          })}
        </ul>
      </div>
    );
  }
});

module.exports = MoviesIndex;