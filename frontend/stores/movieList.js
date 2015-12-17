var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var MovieConstants = require('../constants/movieConstants');
var MovieStore = new Store(AppDispatcher);

var _movieList = [];

var resetMovieList = function (movieList) {
  _movieList = [];
  movieList['Search'].forEach(function(movie) {
    _movieList.push(movie); 
  });
};

var addDescription = function (movieList) {
  fullMovieList = [];
  _movieList.forEach(function(movie) {
    movieId = movie["imdbId"];

  });
};

var addMovieToStore = function (singleMovie) {
  _movieList.push(singleMovie);
}

MovieStore.all = function () {
  addDescription(_movieList);
  return _movieList.slice(0);
};


MovieStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case MovieConstants.SEARCHDATA_RECEIVED:
      resetMovieList(payload.movieData);
      break;
    case MovieConstants.SINGLEMOVIEDATA_RECEIVED:
      addMovieToStore(payload.singleMovieData);
  }
  MovieStore.__emitChange();
};

module.exports = MovieStore;
