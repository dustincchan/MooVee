var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var MovieConstants = require('../constants/movieConstants');
var MovieStore = new Store(AppDispatcher);

var _movieList = [];

var resetMovieList = function (movieList) {
  _movieList = [];
  movieList['results'].forEach(function(movie) {
    if (movie["kind"] === 'feature-movie') {
      _movieList.push(movie);
    }
  });
};

MovieStore.all = function () {
  return _movieList.slice(0);
};

MovieStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case MovieConstants.SEARCHDATA_RECEIVED:
      resetMovieList(payload.movieData);
  }

  MovieStore.__emitChange();
};

module.exports = MovieStore;
