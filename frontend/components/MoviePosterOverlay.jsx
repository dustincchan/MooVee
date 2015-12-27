var React = require('react');

var MoviePosterOverlay = React.createClass({
	render: function () {
		return (
			<div className="ui massive grey label">
				<h4 id="movie-title"> {this.props.movie["Title"]} </h4>
				<i className="huge video play outline icon"/>
				<h5 id="play-trailer-text">(Play Trailer)</h5>
			</div>
		)
	}
});

module.exports = MoviePosterOverlay;