var React = require('react');
var Slider = require('rc-slider');
var FilterActions = require('../../actions/filterActions');

var style = {width: 400, margin: 50};

var RatingSlider = React.createClass ({
	getInitialState: function () {
		return { value: 0 };
	},

	onSliderChange: function (value) {
		this.setState({
			value: value
		});
	},

	handleRatingChange: function () {
		MovieStore.resetMovieLists();
		if (MovieStore.browsingMode()) {
			FilterActions.receiveRatingFilter(this.state.value);
		} else {
			MovieActions.receiveRatingChange(this.state.value);
		}
	},

	render: function () {
		return (
			<div className="item" id="imdb-slider">
				<div id="minimum-imdb" className="item">Minimum Score ({this.state.value}/10)</div>
				<Slider 
					defaultValue="0"
					onAfterChange={this.handleRatingChange} 
					onChange={this.onSliderChange} 
					min="0" max="10" step="0.1"/>
      </div>

			
		)
	}
});

module.exports = RatingSlider;