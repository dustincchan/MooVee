var React = require('react');
var Slider = require('rc-slider');
var FilterActions = require('../../actions/filterActions');

var YearFilter = React.createClass ({
	getInitialState: function () {
		return { value: "All " };
	},

	onSliderChange: function (value) {
		this.setState({
			value: value
		});
	},

	handleRatingChange: function () {
		MovieStore.resetMovieLists();
		FilterActions.receiveYear(this.state.value);
		$('#movies-loading-dimmer').show();
    setTimeout(function() { $('#movies-loading-dimmer').hide(); }.bind(this), 2000);
	},

	render: function () {
		return (
			<div className="item" id="year-slider">
				<div id="year-released" className="item">Year Released</div>
				<Slider 
					defaultValue="1900"
					onAfterChange={this.handleRatingChange} 
					onChange={this.onSliderChange} 
					min={1900} max={2015} step={1}/>
					<div id="year-released-label" className="ui medium grey label">{this.state.value}</div>
      </div>
			
		)
	}
});

module.exports = YearFilter;