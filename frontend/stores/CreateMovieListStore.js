var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var MovieConstants = require('../constants/movieConstants');
var CreateMovieListStore = new Store(AppDispatcher);

var movieListItems = [];

var resetMovieListItems = function () {
	movieListItems = [];
};

var addMovieListItem = function (movie) {
	movieListItems.push(movie);
};

CreateMovieListStore.all = function () {
	return movieListItems;
};

CreateMovieListStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
	  case MovieConstants.MOVIELIST_ITEM_RECEIVED:
	    addMovieListItem(payload.movie);
	    break;
	  case MovieConstants.MOVIELIST_RECEIVED:
	  	debugger;
	  	break;
  }
  CreateMovieListStore.__emitChange();
};

module.exports = CreateMovieListStore;
