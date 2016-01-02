var React = require('react');

var MovieListsIndex = React.createClass({
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
		    			<div className="movie list row">
			    			<div className="three wide column">
				      		<img className="movie list poster" src="http://img.omdbapi.com/?i=tt2488496&apikey=32fa0dab&amp;h=1000"/>
				        </div>

				        <div className="thirteen wide column">
					        <h2>10 Extremely Underrated Movies To Watch This Friday Night</h2>
					        <h4>You will love and enjoy these 10 underrated movies</h4>
				        </div>
				     	</div>

				     	<div className="movie list row">
				        <div className="three wide column">
				      		<img className="movie list poster" src="http://img.omdbapi.com/?i=tt2488496&apikey=32fa0dab&amp;h=1000"/>
				        </div>

				        <div className="thirteen wide column">
					        <h2>25 Films You Haven't Seen But Should</h2>
					        <h4>Lost movies from the 50's to the 70's</h4>
				        </div>
				      </div>
		        </div>


			  </div>

			</div>
		);
	}
});

module.exports = MovieListsIndex;