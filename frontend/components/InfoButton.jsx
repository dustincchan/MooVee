var React = require('react');
var InfoButton = React.createClass({
	componentDidMount: function() {
		$('#' + this.props.movieID + '-options-dropdown').dropdown();
	},

	render: function () {
		return (
				<div id={this.props.movieID + "-options-dropdown"} className="tiny ui blue bottom pointing dropdown button">
					User Options
					<div className="menu">
						<div className="header">User Options</div>
						<div className="item">➕ Add to list</div>
			      <div className="item">✔ Already Seen</div>
			      <div className="item">❌ Hide this movie</div>
					</div>
				</div>
			);
	}
});

module.exports = InfoButton;

