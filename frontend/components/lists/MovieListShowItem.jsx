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
			<div className="movie list items container">
				<div id="movie-list-item-backdrop" className="ui centered big image">
					<img className="movie list item poster" src={this.state.posterLink}/>
					<img className="movie list item backdrop" src={this.state.backdropLink}/>
					<div className="movie list item text">
						<h3 className="movie list item title">{this.props.movie.title} ({this.props.movie.release_date.slice(0,4)})</h3>
						<h4 className="movie list item description">
						{this.props.movie.overview.length > 140 ? this.props.movie.overview.slice(0,140) + "..." : this.props.movie.overview}
						</h4>
					</div>
				</div>
			</div>
		);	
	}
});

module.exports = MovieListShowItem;