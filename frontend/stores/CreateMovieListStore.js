var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var MovieConstants = require('../constants/movieConstants');
var CreateMovieListStore = new Store(AppDispatcher);

var movieListItems = [];
var listPosted = false;
var listItemsPosted = false;
var currentMovieListID = "";

var resetMovieListItems = function () {
	movieListItems = [];
};

var addMovieListItem = function (movie) {
	movieListItems.push(movie);
};

var movieListPostSuccessful = function () {
	listPosted = true;
};

var setCurrentMovieList = function (id) {
	currentMovieListID = id;
};

CreateMovieListStore.currentListID = function () {
	return currentMovieListID;
};

CreateMovieListStore.listItemsPosted = function () {
	return listItemsPosted
};

CreateMovieListStore.resetStore = function () {
	movieListItems = [];
	listPosted = false;
	listItemsPosted = false;
	currentMovieListID ="";
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
	  	movieListPostSuccessful();
	  	setCurrentMovieList(payload.data["id"]);
	  	break;
  }
  CreateMovieListStore.__emitChange();
};

module.exports = CreateMovieListStore;
