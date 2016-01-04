var React = require('react');
var MovieListIndexItem = require('./MovieListIndexItem');
var CurrentMovieList = require('../../stores/CurrentMovieList');
var MovieListActions = require('../../actions/movieListActions');

var MovieListsIndex = React.createClass({
	getInitialState: function () {
		return {movieLists: []}
	},

	componentDidMount: function () {
    $.ajax({
      type: "GET",
      url: "api/movie_lists/",
      dataType: "json",
      success: function (data) {
        this.setState({movieLists: data});
      }.bind(this),
      error: function (e) {
        debugger;
      }
    })
	},

	render: function () {
		return ( 

			<div id="movie-lists-index" className="ui inverted segment">
				<div id="movie-lists-buttons">
					<div className="ui inverted large button">MY LISTS</div>
					<div className="ui inverted large button"><i className="ui heart icon"/>BOOKMARKED LISTS</div>
					<a href="#/lists/new" className="ui right floated inverted large button">
						<i className="ui plus icon"/>CREATE A LIST
					</a>
				</div>


		    <div className="ui huge black label">
		    		<div className="ui grid for movie lists">
		    			{this.state.movieLists.map(function (movieList) {
		    				return (
		    					<MovieListIndexItem key={movieList["id"]} movieList={movieList}/>
		    				)
		    			})}
		        </div>
			  </div>
			</div>
		);
	}
});

module.exports = MovieListsIndex;