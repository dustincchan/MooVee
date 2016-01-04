var Dispatcher = require('../dispatcher/dispatcher');
var MovieConstants = require('../constants/movieConstants');

module.exports = {
	receiveMovieListItem: function (movie) {
    Dispatcher.dispatch({
      actionType: MovieConstants.MOVIELIST_ITEM_RECEIVED,
      movie: movie
    });
  },

  receiveNewMovieList: function (data) {
  	Dispatcher.dispatch({
  		actionType: MovieConstants.MOVIELIST_RECEIVED,
  		data: data
  	});
  },

  openMovieList: function (id) {
    Dispatcher.dispatch({
      actionType: MovieConstants.OPEN_MOVIELIST,
      id: id
    });
  }
};