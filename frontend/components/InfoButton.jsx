var React = require('react');
var InfoButton = React.createClass({
	componentDidMount: function() {
		$('#options-dropdown').dropdown();
	},

	render: function () {
		return (
			<div id="options-dropdown" className="ui icon bottom pointing dropdown button">
			  <i id="eject-icon" className="eject icon"/>
			  <div id="dropdown-menu" className="menu">
			    <div className="item">➕ Add to list</div>
			    <div className="item"> ✔ Already Seen</div>
			    <div className="item">❌ Hide this movie</div>
			  </div>
			</div>
			);
	}
});

module.exports = InfoButton;

