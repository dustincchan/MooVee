var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var FilterConstants = require('../constants/filterConstants');
var FilterStore = new Store(AppDispatcher);
var ApiUtil = require('../util/ApiUtil');

var filters = {'genre': "", 'rating': "", 'year': "", 'pageNum': "1", 'numPages': ""};

resetFilters = function () {
	filters = {'genre': "", 'rating': "", 'year': ""};
	currentPage = 1;
	ApiUtil.getMasterList(filters);
};

updateNumPages = function (numPages) {
	filters['numPages'] = numPages;
};

updateCurrentPage = function (page) {
	if (page != filters['pageNum']) {
		filters['pageNum'] = page;
		ApiUtil.getMasterList(filters);
	}
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
		case FilterConstants.NUM_PAGES_RECEIVED:
			updateNumPages(payload.numPages);
			break;
		case FilterConstants.PAGE_CHANGE_RECEIVED:
			updateCurrentPage(payload.page);
			break;
	}
	FilterStore.__emitChange();
};

module.exports = FilterStore;