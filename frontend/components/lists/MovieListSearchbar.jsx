var React = require('react');
var MovieListActions = require('../../actions/movieListActions');

var MovieListSearchbar = React.createClass({
	getInitialState: function () {
		return { inputVal: "", searchResults: [], movieListItems: [],
						};
	},

	componentDidMount: function () {
		$('#search-result-button').on('click', function () {
		});
	},

	executeSearch: function () {
  	var formattedString = this.state.inputVal.split(' ').join('+');
    $.ajax({
    	type: "GET",
      url: "https://www.omdbapi.com/?s=" + formattedString + "&plot=full&r=json&tomatoes=true",
      dataType: 'json',
      success: function (data) {
      	this.setState({searchResults: data['Search']})
    	}.bind(this)
    })
	},

	updateInput: function (event) {
		this.setState({ inputVal: event.currentTarget.value });
	},

	handleKeyPress: function (event) {
		if (event.charCode === 13) {
			this.executeSearch();
			$('.search.result.items').hide();
			$('.search.result.items').transition('slide down');
		}
	},

	movieSelected: function (event) {
		var imdbID = event.currentTarget.getAttribute('data')
		$.ajax({
		  type: "GET",
		  url: "https://www.omdbapi.com/?i=" + imdbID + "&plot=short&r=json",
		  dataType: 'json',
		  success: function (data) {
		  	MovieListActions.receiveMovieListItem(data);
		  }
		});
		this.setState({ searchResults: [] });
		$('.search.result.items').transition('slide down');
		$('#add-movie-search-input').val('')
	},

	render: function () {
		return (
				<div className="movie list search and modal">
					<div className="ui icon input">
					  <input type="text"
					  		id="add-movie-search-input" 
					  		onChange={this.updateInput} 
					  		onKeyPress={this.handleKeyPress}
					  		placeholder="Add a movie (ex. 'star wars 2015')"/>
					  <i onClick={this.executeSearch} className="circular search link icon"></i>
					</div>

					<div className="search result items">
						{this.state.searchResults.map(function (movie) {
							return  <button key={movie["imdbID"]} data={movie["imdbID"]} onClick={this.movieSelected} className='fluid ui button'>
												{movie["Title"]} ({movie["Year"]})
											</button>
						}.bind(this))}
					</div>

				</div>
		);
	}
});

module.exports = MovieListSearchbar;