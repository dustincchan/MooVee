var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var FilterConstants = require('../constants/filterConstants');
var FilterStore = new Store(AppDispatcher);
var ApiUtil = require('../util/apiUtil');

var filters = {'genre': "", 'rating': "", 'year': ""};


updateGenreFilter = function (genre) {
	filters['genre'] = genre;
	ApiUtil.getMasterList(filters);
};

updateRatingFilter = function (rating) {
	filters['rating'] = rating;
	ApiUtil.getMasterList(filters);
}

FilterStore.all = function () {
	return filters;
};

FilterStore.__onDispatch = function (payload) {
	switch(payload.actionType) {
		case FilterConstants.GENRE_FILTER_RECEIVED:
			updateGenreFilter(payload.genre);
			break;
		case FilterConstants.RATING_FILTER_RECEIVED:
			updateRatingFilter(payload.rating);
			break;
	}
	FilterStore.__emitChange();
};

module.exports = FilterStore;