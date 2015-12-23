var React = require('react');
var FilterStore = require('../../stores/FilterStore');
var MovieStore = require('../../stores/MovieStore');
var ApiUtil = require('../../util/ApiUtil.js');
var FilterActions = require('../../actions/filterActions');
var MovieActions = require('../../actions/movieActions');
var GenreFilter = require('./GenreFilter');
var currentRating = '';

var RatingFilter = React.createClass({
	componentDidMount: function () {
		this.filterListener = FilterStore.addListener(this._onChange);

		$('.rating')
			.rating({
				initialRating: 0,
				maxRating: 10
			});
		$('.rating')
			.rating('setting', 'onRate', function(value) {
				MovieStore.resetMovieLists();
				if (MovieStore.browsingMode()) {
					FilterActions.receiveRatingFilter(value);
				} else {
					MovieActions.receiveRatingChange(value);
				}
			});
	},

	_onChange: function () {
		filters = FilterStore.all();
	},

	componentWillUnmount: function () {
		this.filterListener.remove();
	},

	render: function() {
		return (
			<div className="ui star rating" data-rating="1"></div>
			);
	}
});

module.exports = RatingFilter;