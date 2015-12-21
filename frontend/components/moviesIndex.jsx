var React = require('react');
var MovieStore = require('../stores/movieList');
var UserStore = require('../stores/UserStore');
var ApiUtil = require('../util/apiUtil');
var MovieIndexItem = require('./movieIndexItem');
var Search = require('./movieSearch');
var RatingFilter = require('./ratingFilter');
var GenreFilter = require('./GenreFilter');

var MoviesIndex = React.createClass({
  getInitialState: function () {
    return { movies: MovieStore.all(), };
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
      <div className="ui four column grid">
        <div className="three column row" id="search-bar">
          <div className="column" id="search"><Search/></div>
          <div className="column">
            <GenreFilter/>
          </div>
          <div className="column" id="big-search">
            <div className="ui segment" id="rating">
            <a className="ui yellow circular label" id="imdb-label">Minimum IMDB Rating: </a>
            <RatingFilter/></div>
          </div>

        </div>
        
        <ul className="ui medium images" id="grid-images">

          {this.state.movies.map(function (movie) {
            return (
              <MovieIndexItem 
              movie={movie} 
              key={movie["imdbID"]}
              plot={movie["Plot"].length > 700 ? movie["Plot"].slice(0,700) + "..." : movie["Plot"]}
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