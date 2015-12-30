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
			<div id="genre-filter" className="ui form">
			  <div id="genre-inline-fields" className="inline fields">
			    <label className="ui yellow label">Genre</label>
			    	<select className="ui search dropdown">
			    		<option value="">All</option>
			    		<option value="28">Action</option>
			    		<option value="12">Adventure</option>
			    		<option value="16">Animation</option>
			    		<option value="35">Comedy</option>
			    		<option value="80">Crime</option>
			    		<option value="99">Documentary</option>
			    		<option value="18">Drama</option>
			    		<option value="10751">Family</option>
			    		<option value="14">Fantasy</option>
			    		<option value="10769">Foreign</option>
			    		<option value="36">History</option>
			    		<option value="27">Horror</option>
			    		<option value="10402">Music</option>
			    		<option value="9648">Mystery</option>
			    		<option value="10749">Romance</option>
			    		<option value="878">Science Fiction</option>
			    		<option value="10770">TV Movie</option>
			    		<option value="53">Thriller</option>
			    		<option value="10752">War</option>
			    		<option value="37">Western</option>
			    	</select>
			  </div>
			</div>
		);
	}
});

module.exports = GenreFilter;