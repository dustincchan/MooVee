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

				<div className="tutorial row">
					<div className="column"/>
					<div className="seven wide column">
						<img id="tutorial-screenshot" src="tutorial_filters.png"/>
					</div>
					<div className="column"/>
					<div className="five wide column" id="tutorial-description">
						<div className="five wide column"/>
							<h1>Go searching, or just browse.</h1>
							Movies shown on the front page are recent and popular. 
							If you want to get a little bit more specific, Movie Me has got your back.
							<br/><br/>First, get an idea for what type of movie you want.
							Play around with the filters to let Movie Me know what you are into. 
							The movie list will update dynamically as you add and remove filters.
						</div>
				</div>
			</div>
		)
	}
});

module.exports = Tutorials;