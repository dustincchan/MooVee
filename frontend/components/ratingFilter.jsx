var React = require('react');
var MovieStore = require('../stores/movieList');
var ApiUtil = require('../util/apiUtil.js');
var MovieActions = require('../actions/movieActions');
var RatingFilter = React.createClass({

	componentDidMount: function () {
		$('.rating')
			.rating({
				initialRating: 0,
				maxRating: 10
			});
		$('.rating')
			.rating('setting', 'onRate', function(value) {
				MovieActions.receiveRatingChange(value);
			});
	},


	render: function() {
		return (
			<div className="ui star rating" data-rating="3"></div>
			);
	}
});

module.exports = RatingFilter;