var React = require('react');
var MovieListSearchbar = require('./MovieListSearchbar');

var MovieListForm = React.createClass({
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
				<button className="ui inverted orange basic button">DELETE THIS LIST</button>
				<div className="movie list search bar">
					<MovieListSearchbar/>
					<div className="movie list searchbar buttons">
						<button className="ui inverted basic button">SAVE TO MY LISTS</button>
						<button className="ui inverted green button">PUBLISH</button>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = MovieListForm;