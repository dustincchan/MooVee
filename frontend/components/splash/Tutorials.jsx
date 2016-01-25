var React = require('react');

var Tutorials = React.createClass({
	render: function () {
		return (
			<div className="ui grid">
				<div className="tutorial row">
					<div className="two wide column"/>
					<div className="five wide column" id="tutorial-description">
					<div className="two wide column"/>
						<h1>Go searching, or just browse.</h1>
						Movies shown on the front page are recent and popular. 
						If you want to get a little bit more specific, Movie Me has got your back.
						<br/><br/>First, get an idea for what type of movie you want.
						Play around with the filters to let Movie Me know what you are into. 
						The movie list will update dynamically as you add and remove filters.
					</div>
					<div className="column"/>
					<div className="seven wide column">
						<img id="tutorial-screenshot" src="tutorial_filters.png"/>
					</div>
					<div className="column"/>
				</div>

				<div className="tutorial row inverse">
					<div className="two wide column"/>
					<div className="five wide column">
						<img id="tutorial-screenshot" src="tutorial_overlay.png"/>
					</div>
					<div className="column"/>
					<div className="five wide column" id="tutorial-description">
						<div className="five wide column"/>
							<h1>Found something? Great!</h1>
							All the information you want about a movie can be found by just hovering over its poster.
							Click the "play trailer" button to pop-up a youtube modal without having to leave the site.
							<br/><br/>
							Not convinced? Click the green button for more information about the movie and to find out 
							what others think about that movie based on its IMDB and Rotten Tomatoes rating.
						</div>
				</div>

				<div className="tutorial row">
					<div className="two wide column"/>
					<div className="five wide column" id="tutorial-description">
					<div className="two wide column"/>
						<h1>Share.</h1>
						Loved the movie you just watched? Or maybe you want to save a list of your favorite movies.
						Navigate to the movie list creation page and save them in a list. 
						<br/><br/>
						After creating a list, it will show up on the movie lists index page. It is also a great resource
						to find movies that you may have not seen before.
					</div>
					<div className="column"/>
					<div className="seven wide column">
						<img id="tutorial-screenshot" src="tutorial_movie_list.png"/>
					</div>
					<div className="column"/>
				</div>

				<div className="github and linkedin icons">
					<a href="http://dustin-chan-89.github.io/"><i id="about-icon" className="large github about icon"></i></a>
					<a href="https://www.linkedin.com/in/dustin-chan-77901a8"><i id="about-icon" className="large linkedin square icon"></i></a>
				</div>
			</div>
		)
	}
});

module.exports = Tutorials;