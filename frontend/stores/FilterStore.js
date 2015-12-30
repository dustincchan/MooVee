var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var FilterConstants = require('../constants/filterConstants');
var FilterStore = new Store(AppDispatcher);
var ApiUtil = require('../util/ApiUtil');

var filters = {'genre': "", 'rating': "", 'year': ""};

resetFilters = function () {
	filters = {'genre': "", 'rating': "", 'year': ""};
	ApiUtil.getMasterList(filters);
};

updateGenreFilter = function (genre) {
	filters['genre'] = genre;
	ApiUtil.getMasterList(filters);
};

updateRatingFilter = function (rating) {
	filters['rating'] = rating;
	ApiUtil.getMasterList(filters);
};

updateYearFilter = function (year) {
	filters['year'] = year;
	ApiUtil.getMasterList(filters);
};

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
		case FilterConstants.YEAR_FILTER_RECEIVED:
			updateYearFilter(payload.year);
			break;
		case FilterConstants.RESET_FILTERS:
			resetFilters();
			break;
	}
	FilterStore.__emitChange();
};

module.exports = FilterStore;