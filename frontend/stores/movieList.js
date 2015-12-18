var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var MovieConstants = require('../constants/movieConstants');
var MovieStore = new Store(AppDispatcher);

var _movieList = [];
var _filteredMovieList = _movieList.slice(0);
var ratingTooHigh = false;

var resetMovieList = function () {
  _movieList = [];
  _filteredMovieList = [];
};

var addMovieToStore = function (singleMovie) {
  _movieList.push(singleMovie);
};

var filterByRating = function (imdbRating) {
  newMovieList = [];
  for (var i = 0; i < _movieList.length; i++) {
    currentMovie = _movieList[i];
    movieRating = parseFloat(currentMovie["imdbRating"]);
    if (movieRating >= imdbRating) {
      newMovieList.push(currentMovie);
    }
  }
  _filteredMovieList = newMovieList;
  ratingTooHigh = false;
  if (_filteredMovieList.length === 0) {
    ratingTooHigh = true;
  }
};

MovieStore.all = function () {
  if (_filteredMovieList.length > 0 || ratingTooHigh === true) {
    return _filteredMovieList;
  } else {
  return _movieList.slice(0);
  }
};


MovieStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case MovieConstants.SEARCHDATA_RECEIVED:
      resetMovieList(payload.movieData);
      break;
    case MovieConstants.RESET_STORE:
      resetMovieList();
      break;
    case MovieConstants.SINGLEMOVIEDATA_RECEIVED:
      addMovieToStore(payload.singleMovieData);
      break;
    case MovieConstants.RATING_CHANGED:
      filterByRating(payload.rating);
      break;
  }
  MovieStore.__emitChange();
};

module.exports = MovieStore;
