var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var MovieConstants = require('../constants/movieConstants');
var CurrentMovieList = new Store(AppDispatcher);

var currentMovieListID = ""

var updateCurrentList = function (id) {
	currentMovieListID = id;
};

CurrentMovieList.getListID = function () {
	return currentMovieListID;
};

CurrentMovieList.__onDispatch = function (payload) {
  switch(payload.actionType) {
	  case MovieConstants.OPEN_MOVIELIST:
	    updateCurrentList(payload.id);
	    break;
  }
  CurrentMovieList.__emitChange();
};

module.exports = CurrentMovieList;
