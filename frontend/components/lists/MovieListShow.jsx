// backdrop: http://image.tmdb.org/t/p/original/njv65RTipNSTozFLuF85jL0bcQe.jpg
var Router = require('react-router');
var React = require('react');
var History = require('react-router').History;
var CurrentMovieList = require('../../stores/CurrentMovieList');
var MovieListShowItem = require('./MovieListShowItem');

var MovieListShow = React.createClass ({
	mixins: [History],

	getInitialState: function () {
		return {movies: [], title: "", description: ""};
	},

	componentDidMount: function () {
		if (CurrentMovieList.getListID() === "") {
			this.history.pushState(null, '/lists/', {});
		} else {
			$.ajax({
	      type: "GET",
	      url: "api/movie_lists/" + CurrentMovieList.getListID(),
	      success: function (data) {
	      	this.formatResponse(data);
	      }.bind(this),
	      error: function (e) {
	        debugger;
	      }
	    })

	    $.ajax({
	      type: "GET",
	      url: "api/movie_lists/",
	      success: function (data) {
	      	var id = CurrentMovieList.getListID() - 1;
	      	var title = data[id].title;
	      	var description = data[id].description;
	      	this.setState({ title: title, description: description });
	      }.bind(this),
	      error: function (e) {
	        debugger;
	      }
	    })
		}
	},

	formatResponse: function (data) {
		var url = 'https://api.themoviedb.org/3/find/';
	  var key = '&api_key=1065f29f8db79281f9c287d5ef2ba938';
		data.forEach(function (movie) {
		  $.ajax({
	      type: 'GET',
	      url: url + movie["imdbID"] + "?external_source=imdb_id" + key,
	      async: false,
	      contentType: 'application/json',
	      dataType: 'jsonp',
	      success: function (data) {
	      	this.setState({ movies: this.state.movies.concat(data.movie_results) });
	      }.bind(this),
	      error: function (e) {
	      }
			})
		}.bind(this))
	},

	render: function () {
		return (
			<div className="ui grid for movie list items">
				<div className="movie list header">
					<h1>{this.state.title}</h1>
					<h2>{this.state.description}</h2>
				</div>
				{this.state.movies.map(function (movie) {
					return (
						<MovieListShowItem key={movie.id} movie={movie}/>
					)
				})}
			</div>
		);
	}
});

module.exports = MovieListShow;