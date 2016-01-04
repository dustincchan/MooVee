var React = require('react');
var MovieListActions = require('../../actions/movieListActions');
var History = require('react-router').History;

var MovieListShowItem = React.createClass({
	mixins: [History],
	getInitialState: function () {
		var backdropURL = "http://image.tmdb.org/t/p/original/" + this.props.movie.backdrop_path;
		var posterURL = "http://image.tmdb.org/t/p/original/" + this.props.movie.poster_path;
		return {backdropLink: backdropURL, posterLink: posterURL}
	},

	render: function () {
		return (

			<div id="movie-list-item-backdrop" className="ui centered big image">
				<img className="movie list item poster" src={this.state.posterLink}/>
				<img className="movie list item backdrop" src={this.state.backdropLink}/>
			</div>
		);	
	}
});

module.exports = MovieListShowItem;