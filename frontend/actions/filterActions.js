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
	}
}