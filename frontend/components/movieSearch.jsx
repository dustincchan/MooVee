var React = require('react');
var MovieStore = require('../stores/movieList');
var ApiUtil = require('../util/apiUtil.js');


var Search = React.createClass({
	getInitialState: function () {
		return { inputVal: "" };
	},

	executeSearch: function () {
		ApiUtil.fetchFromIMDB(this.state.inputVal);
	},

	updateInput: function (event) {
		this.setState({ inputVal: event.currentTarget.value })
	},

	handleKeyPress: function (event) {
		if (event.charCode === 13) {
			this.executeSearch();
		}
	},

	render: function() {
		return (
			<div className="ui action input" id="search-box">
				<input onChange={this.updateInput} 
				type="text" 
				placeholder="Search..."
				onKeyPress={this.handleKeyPress}
				/>
				<button onClick={this.executeSearch} className="ui button">Search Movies</button>
			</div>
		);
	}
});

module.exports = Search;