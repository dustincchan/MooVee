var React = require('react');
var FilterStore = require('../../stores/FilterStore');
var FilterActions = require('../../actions/filterActions');
var currentGenre = '';
var GenreFilter = React.createClass({

	componentDidMount: function () {
		this.filterListener = FilterStore.addListener(this._onChange);

		$('.ui.form').form({});
		$('.dropdown').dropdown({
			onChange: function(value) {
				action: 'set selected(value)',
				FilterActions.receiveGenreFilter(value);
			}
		})
	},

	_onChange: function () {
		filters = FilterStore.all();
	},

	componentWillUnmount: function () {
		this.filterListener.remove();
	},

	render: function () {
		return (
			<div/>
		);
	}
});

module.exports = GenreFilter;