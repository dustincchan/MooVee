var React = require('react');

var MovieListSearchbar = React.createClass({
	getInitialState: function () {
		return { inputVal: "", searchResults: []};
	},

	executeSearch: function () {
  	var formattedString = this.state.inputVal.split(' ').join('+');
    $.ajax({
    	type: "GET",
      url: "https://www.omdbapi.com/?s=" + formattedString + "&plot=full&r=json&tomatoes=true",
      dataType: 'json',
      success: function (data) {
      	this.setState({searchResults: data['Search']})
      	this.openResultsModal();
    	}.bind(this)
    })
	},

	openResultsModal: function () {
		$('.ui.small.modal')
			.modal({
				onHide: function () { this.closeModal() }.bind(this)
			})
			.modal('show');
	},

	updateInput: function (event) {
		this.setState({ inputVal: event.currentTarget.value });
	},

	handleKeyPress: function (event) {
		if (event.charCode === 13) {
			this.executeSearch();
		}
	},

	render: function () {
		return (
				<div className="movie list search and modal">
					<div className="ui icon input">
					  <input type="text" 
					  		onChange={this.updateInput} 
					  		onKeyPress={this.handleKeyPress}
					  		placeholder="Add a movie (ex. 'star wars 2015')"/>
					  <i onClick={this.executeSearch} className="circular search link icon"></i>
					</div>

					<div className="ui small modal">
							<div className="search result items">
							{this.state.searchResults.map(function (movie) {
								return (
									<div key={movie["imdbID"]} className="fluid ui button">{movie["Title"]} ({movie["Year"]})</div>
								)
							})}
						</div>
					</div>
				</div>
		);
	}
});

module.exports = MovieListSearchbar;