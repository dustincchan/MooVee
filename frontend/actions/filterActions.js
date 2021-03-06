var Dispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filterConstants');

module.exports = {
	receiveGenreFilter: function (genre) {
		Dispatcher.dispatch({
			actionType: FilterConstants.GENRE_FILTER_RECEIVED,
			genre: genre
		})
	},

	receiveRatingFilter: function (rating) {
		Dispatcher.dispatch({
			actionType: FilterConstants.RATING_FILTER_RECEIVED,
			rating: rating
		})
	},

	receiveYear: function (year) {
		Dispatcher.dispatch({
			actionType: FilterConstants.YEAR_FILTER_RECEIVED,
			year: year
		})
	},

	resetFilters: function () {
		Dispatcher.dispatch({
			actionType: FilterConstants.RESET_FILTERS
		})
	},

	receiveNumPages: function (numPages) {
		Dispatcher.dispatch({
			actionType: FilterConstants.NUM_PAGES_RECEIVED,
			numPages: numPages
		})
	},

	receivePageChange: function (page) {
		Dispatcher.dispatch({
			actionType: FilterConstants.PAGE_CHANGE_RECEIVED,
			page: page
		})
	}
}