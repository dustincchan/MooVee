var Dispatcher = require('../dispatcher/dispatcher');
var MovieConstants = require('../constants/movieConstants');

module.exports = {
  receiveSearchData: function (movieData) {
    Dispatcher.dispatch({
      actionType: MovieConstants.SEARCHDATA_RECEIVED,
      movieData: movieData
    });
  },

  receiveSingleMovie: function (singleMovieData) {
  	Dispatcher.dispatch({
  		actionType: MovieConstants.SINGLEMOVIEDATA_RECEIVED,
  		singleMovieData: singleMovieData
  	});
  },

  resetStore: function () {
    Dispatcher.dispatch({
      actionType: MovieConstants.RESET_STORE
    });
  },

  receiveRatingChange: function (rating) {
    Dispatcher.dispatch({
      actionType: MovieConstants.RATING_CHANGED,
      rating: rating
    });
  },

  receiveUserLogin: function (data) {
    debugger;
  }
};
