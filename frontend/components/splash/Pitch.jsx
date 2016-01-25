var React = require('react');

var Pitch = React.createClass({
	render: function () {
		return (
			<div className="ui five column grid" id="website-pitch">
				<div className="row" id="website-pitch-row">
					<div className="column"/>

					<div className="column" id="pitch-column"><div className="pitch column header">Your next movie in seconds</div><br/>
						<div className="pitch column body">
							Movie Me connects two large-scale movie databases to provide a gimormous selection of movies.
							You won't have to browse endlessly just to find a movie you're not so sure about.
						</div>
					</div>

					<div className="column" id="pitch-column"><div className="pitch column header">Don't get a rotten tomato</div><br/>
						<div className="pitch column body">
							Aggregate filters allows you to search for movies that are up to your standards.
							Revealing the back of a movie's poster displays extra information including its IMDB and
							Rotten Tomatoes rating.
						</div>
					</div>

					<div className="column" id="pitch-column"><div className="pitch column header">Share your inner movie guru</div><br/>
						<div className="pitch column body">
							Show off movies you've seen that others haven't. Or just keep track of your favorite movies.
							You can easily create descriptive and colorful movie lists to share with friends and family. 
						</div>
					</div>
					<div className="column"/>
				</div>
			</div>
		)
	}
})

module.exports = Pitch