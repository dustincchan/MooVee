var React = require('react');

var Welcome = React.createClass({
	render: function () {
		return (
			<div className="backdrop container">
					<img id="welcome-background-image" src='./welcome-backdrop.jpg'/>
					<h1 className="welcome header">Find something to watch.</h1>
					<h2 className="welcome subheader">Quickly browse a database of over 250,000 movies.</h2>
					<div className="welcome buttons container">
						<a href="#/browse" id="browse-movies-button" className="ui inverted blue basic button">BROWSE MOVIES</a>
						<a href="#/lists" id="browse-lists-button" className="ui inverted blue basic button">BROWSE LISTS</a>
					</div>
			</div>
		)

	}
});

module.exports = Welcome;