var React = require('react');
var MovieStore = require('../stores/movieList');
var ApiUtil = require('../util/apiUtil.js');
var MovieActions = require('../actions/movieActions');

var Gmap = {
	"Action": 28,
	"Adventure": 12,
	"Animation": 16,
	"Comedy": 35,
	"Crime": 80,
	"Documentary": 99,
	"Drama": 18,
	"Family": 10751,
	"Fantasy": 14,
	"Foreign": 10769,
	"History": 36,
	"Horror": 27,
	"Music": 10402,
	"Mystery": 9648,
	"Romance": 10749,
	"Science Fiction": 878,
	"TV Movie": 10770,
	"Thriller": 53,
	"War": 10752,
	"Western": 37
};

var GenreFilter = React.createClass({

	componentDidMount: function () {
		$('.ui.form').form({});
		$('.dropdown').dropdown({
			onChange: function(value, text, $selectedItem) {
				action: 'set selected(value)',
				MovieStore.resetMovieLists();
				ApiUtil.getMasterList(value);
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