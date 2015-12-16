var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var MovieConstants = require('../constants/movieConstants');
var MovieStore = new Store(AppDispatcher);

var _movieList = {};

var resetMovieList = function (movieList) {
  _movieList = {};
  movieList['results'].forEach(function(movie) {
    if (movie["kind"] === 'feature-movie') {
      _movieList[movie["trackId"]] = movie;
    }
  });
};
