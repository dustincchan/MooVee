var React = require('react');
var MovieListIndexItem = require('./MovieListIndexItem');
var CurrentMovieList = require('../../stores/CurrentMovieList');
var MovieListActions = require('../../actions/movieListActions');
var UserStore = require('../../stores/UserStore');

var MovieListsIndex = React.createClass({

	getInitialState: function () {
		return {movieLists: [], users: []}
	},

	componentDidMount: function () {
    $.ajax({
      type: "GET",
      url: "api/movie_lists/",
      dataType: "json",
      success: function (data) {
        this.setState({movieLists: data});
        this.getAuthorNames();
      }.bind(this),
      error: function (e) {
        debugger;
      }
    })
	},

	getAuthorNames: function () {
		this.state.movieLists.map(function (movieList) {
			$.ajax({
				type: "GET",
				url: "api/users/" + movieList.author_id,
				dataType: "json",
				success: function (data) {
					this.setState({ users: this.state.users.concat(data.username) })
				}.bind(this)
			})
		}.bind(this))
	},

	render: function () {
		return ( 
			<div id="movie-lists-index" className="ui inverted segment">
				<div id="movie-lists-buttons">
					<div id="my-lists-button" className="ui inverted large button">MY LISTS</div>
					<div id="bookmarked-lists-button" className="ui inverted large button"><i className="ui heart icon"/>BOOKMARKED LISTS</div>
					<a href={UserStore.currentUser() == "" ? "#/session/new"  : "#/lists/new"}
						className="ui right floated inverted large button">
						<i className="ui plus icon"/>CREATE A LIST
					</a>
				</div>

		    <div className="ui huge black label">
		    		<div className="ui grid for movie lists">
		    			{this.state.movieLists.map(function (movieList) {
		    				return (
		    					<MovieListIndexItem key={movieList["id"]} movieList={movieList}/>
		    				)
		    			}.bind(this))}
		        </div>
			  </div>
			</div>
		);
	}
});

module.exports = MovieListsIndex;