var React = require('react');
var MovieIndexItem = React.createClass({
	render: function () {
		return (
				<li className="ui image column">
					<p className="ui blue label column">{this.props.movie["Title"]}</p>

					<div className="ui move down reveal image">
						<div className="visible content">
							<img src={this.props.posterLink} className="ui tertiary raised blue segment"/>
						</div>
						<div className="center aligned hidden content">
							hidden stuff
						</div>
					</div>
				</li>
			);
		}
});

module.exports = MovieIndexItem;