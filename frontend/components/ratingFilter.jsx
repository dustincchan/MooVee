var React = require('react');
var MovieStore = require('../stores/movieList');
var ApiUtil = require('../util/apiUtil.js');
var Nouislider = require('react-nouislider');

var RatingFilter = React.createClass({

	componentDidMount: function () {
		$('.rating')
			.rating({
				initialRating: 3,
				maxRating: 10
			})
	},

	render: function() {
		return (
			<div className="ui star rating" data-rating="3"></div>
			);
	}
});

module.exports = RatingFilter;