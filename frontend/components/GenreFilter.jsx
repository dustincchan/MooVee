var React = require('react');
var MovieStore = require('../stores/movieList');
var ApiUtil = require('../util/apiUtil.js');
var MovieActions = require('../actions/movieActions');

var GenreFilter = React.createClass({

	componentDidMount: function () {
		$('.ui.form').form({
			fields: {
				fruit: 'empty'
			}
		})
	},

	render: function () {
		return (
			<div id="genre-filter" className="ui form">
			  <div id="genre-inline-fields" className="inline fields">
			    <label className="ui yellow label">Genre</label>
			    	<select className="ui search dropdown">
			    		<option value="">All</option>
			    		<option value="Action">Action</option>
			    		<option value="Adventure">Adventure</option>
			    		<option value="Animation">Animation</option>
			    		<option value="Comedy">Comedy</option>
			    		<option value="Crime">Crime</option>
			    		<option value="Documentary">Documentary</option>
			    		<option value="Drama">Drama</option>
			    		<option value="Family">Family</option>
			    		<option value="Fantasy">Fantasy</option>
			    		<option value="Foreign">Foreign</option>
			    		<option value="History">History</option>
			    		<option value="Horror">Horror</option>
			    		<option value="Music">Music</option>
			    		<option value="Mystery">Mystery</option>
			    		<option value="Romance">Romance</option>
			    		<option value="Science Fiction">Science Fiction</option>
			    		<option value="TV Movie">TV Movie</option>
			    		<option value="Thriller">Thriller</option>
			    		<option value="War">War</option>
			    		<option value="Western">Western</option>

			    	</select>
			  </div>
			</div>
		);
	}
});

module.exports = GenreFilter;