var React = require('react');
var MovieStore = require('../stores/movieList');
var ApiUtil = require('../util/apiUtil');
var MovieIndexItem = require('./movieIndexItem');

module.exports = React.createClass({
  getInitialState: function () {
    return { movies: MovieStore.all() };
  },

  _onChange: function () {
    this.setState({ movies: MovieStore.all() });
  },

  componentDidMount: function () {
    this.movieListener = MovieStore.addListener(this._onChange);
    ApiUtil.fetchFromItunes();
  },

  componentWillUnmount: function () {
    this.movieListener.remove();
  },

  render: function () {
    return (
      <ul>
        {this.state.movies.map(function (movie) {
          
        })}
      </ul>
    );
  }
});
