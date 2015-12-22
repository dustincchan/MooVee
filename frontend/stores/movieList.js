var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var MovieConstants = require('../constants/movieConstants');
var MovieStore = new Store(AppDispatcher);

var _movieList = [];
var _masterList = [];
var _filteredMovieList = _movieList.slice(0);
var ratingTooHigh = false;
var browsing = true;

var resetMovieLists = function () {
  _movieList = [];
  _filteredMovieList = [];
  _masterList = [];
};

var toggleBrowsing = function () {
  if (browsing) {
    browsing = false;
  } else {
    browsing = true;
  }
}

var addMovieToStore = function (singleMovie) {
  _movieList.push(singleMovie);
};

var formatMasterList = function (movieData) {
  _masterList.push(movieData);
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

MovieStore.browsingMode = function () {
  return browsing;
};

MovieStore.resetMovieLists = function () {
  _movieList = [];
  _filteredMovieList = [];
  _masterList = [];
}

MovieStore.masterList = function () {
  return _masterList;
};

MovieStore.all = function () {
  if (_masterList.length > 0) {
    return _masterList.slice(0);
  } else if (_filteredMovieList.length > 0 || ratingTooHigh === true) {
    return _filteredMovieList.slice(0);
  } else if (_movieList.length === 0 || (_filteredMovieList.length === 0 )) {
    return _movieList.slice(0);
  }
};


MovieStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case MovieConstants.SEARCHDATA_RECEIVED:
      resetMovieLists(payload.movieData);
      break;
    case MovieConstants.RESET_STORE:
      resetMovieLists();
      break;
    case MovieConstants.SINGLEMOVIEDATA_RECEIVED:
      addMovieToStore(payload.singleMovieData);
      break;
    case MovieConstants.RATING_CHANGED:
      filterByRating(payload.rating);
      break;
    case MovieConstants.BROWSEMOVIE_RECEIVED:
      formatMasterList(payload.movieData);
      break;
  }
  MovieStore.__emitChange();
};

module.exports = MovieStore;
