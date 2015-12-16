var Dispatcher = require('../dispatcher/dispatcher');
var MovieConstants = require('../constants/movieConstants');

module.exports = {
  receiveSearchData: function (movieData) {
    Dispatcher.dispatch({
      actionType: MovieConstants.SEARCHDATA_RECEIVED,
      movieData: movieData
    });
  }
};
