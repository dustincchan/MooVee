var React = require('react');

module.exports = React.createClass({
	render: function () {
		<li classname='movie-list-item'>
			<p>Name: {this.props.movie["trackName"]}</p>
			<img src={this.props.move["artworkUrl60"]}/>
		</li>
	}
});