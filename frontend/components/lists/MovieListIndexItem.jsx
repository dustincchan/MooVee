var React = require('react');
var MovieListActions = require('../../actions/movieListActions');

var History = require('react-router').History;

var MovieListIndexItem = React.createClass({
	mixins: [History],

	showMovieList: function () {
		listId = this.props.movieList.id;
		var url = '/lists/' + listId
		this.history.pushState(null, url, {})
		MovieListActions.openMovieList(listId);
	},	

	render: function () {
		return (
			<div onClick={this.showMovieList} className="movie list row">
				<div className="three wide column">
  				<img className="movie list poster" src="http://www.hellomandarin.com/ilovechinese/images/08-08/Img214498491.jpg"/>
  			</div>

  			<div className="thirteen wide column">
  				<h2>{this.props.movieList["title"]}</h2>
  				<h4>{this.props.movieList["description"]}</h4>
  			</div>
  		</div>
		);	
	}
});

module.exports = MovieListIndexItem;