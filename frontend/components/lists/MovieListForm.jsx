var React = require('react');
var MovieListSearchbar = require('./MovieListSearchbar');
var CreateMovieListStore = require('../../stores/CreateMovieListStore');
var History = require('react-router').History;

var MovieListForm = React.createClass({
	mixins: [History],

	getInitialState: function () {
		return { movieListItems: [], currentListID: "" };
	},

	componentDidMount: function () {
		this.movieFormListener = CreateMovieListStore.addListener(this._onChange);
	},

	componentWillUnmount: function () {
		this.movieFormListener.remove();
	},

	publishList: function () {
		var title = $('.movie.list.title').val();
		var description = $('.movie.list.description').val();
		var author_id = UserStore.userData()["id"]
		ApiUtil.publishList({title: title, 
												description: description, 
												author_id: author_id});
	},

	deleteList: function () {
		this.history.pushState(null, '/lists/', {});
		CreateMovieListStore.resetStore();
	},

	_onChange: function () {
		this.setState({ movieListItems: CreateMovieListStore.all() });

		if (CreateMovieListStore.currentListID() != "" && CreateMovieListStore.listItemsPosted() === false) {
			ApiUtil.addMovieListItems(this.state.movieListItems);
		}
	},

	render: function () {
		return (
			<div id="movie-list-form">

				<form className="ui form">
					<div className="field">
						<textarea className="movie list title" rows="1" type="text" name="title" placeholder="List Title"/>
					</div>

					<div className="field">
						<textarea className="movie list description" rows="2" placeholder="Description"/>
					</div>
				</form>
				<button onClick={this.deleteList} className="ui inverted orange basic button">DELETE THIS LIST</button>
				<div className="movie list search bar">
					<MovieListSearchbar/>
					<div className="movie list searchbar buttons">
						<button className="ui inverted basic button">SAVE TO MY LISTS</button>
						<button onClick={this.publishList} className="ui inverted green button">PUBLISH</button>
					</div>
				</div>

				<div id="movie-list-form-items" className="ui inverted segment">
				  <div className="ui inverted relaxed divided list">

						{this.state.movieListItems.map(function (movie) {
							return  <div className="movie list item" key={movie["imdbID"]}>
												<div className="content">
													<div className="header">{movie["Title"]} ({movie["Year"]})</div>
													{movie["Plot"]}
												</div>
											</div>	
						}.bind(this))}
				  </div>
				</div>
			</div>
		)
	}
});

module.exports = MovieListForm;