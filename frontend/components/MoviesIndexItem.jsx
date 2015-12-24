var React = require('react');
var ReactDOM = require('react-dom');
var MovieStore = require('../stores/MovieStore');
var InfoButton = require('./InfoButton')
var MoviePosterOverlay = require('./MoviePosterOverlay');

var MovieIndexItem = React.createClass({
	componentDidMount: function () {
		$('.shape').shape();
	},

	handlePosterClicked: function () {
		$('#'+this.props.movie["imdbID"]).shape('flip right');
	},

	revealOverlay: function () {
		var node = ReactDOM.findDOMNode(this.refs.overlayRef);
		node.classList.remove("hidden");
	},

	hideOverlay: function () {
		var node = ReactDOM.findDOMNode(this.refs.overlayRef);
		node.classList.add("hidden");
	},

	render: function () {
		return (
				<li id="image-column" className="ui image column">
					<div ref="overlayRef" className="overlay-information hidden">
						<MoviePosterOverlay/>
					</div>
						<div className="ui people shape" id={this.props.movie["imdbID"]}>
						  <div className="sides">
						    <div className="side active">
						      <div className="ui card" id="card-front">
						        <div id="image-container" className="image">
						        	<div className="poster and info-button">
							          <img className="movie-poster" 
							          		onClick={this.handlePosterClicked}
							          		onMouseEnter={this.revealOverlay}
							          		onMouseLeave={this.hideOverlay}
							          		id={this.props.movie["imdbID"]} 
							          		src={this.props.posterLink}>
							          </img>
							        </div>
						        </div>
						      </div>
						    </div>
						    <div className="side">
						      <div onClick={this.handlePosterClicked} className="ui card" id="card-back">
						        <div className="content">
						          
						          <br/>
						          <div className="content">
						          	<div className="ui header">More Info</div>
						          	<div className="director"> <b>Directed by:</b> <i>{this.props.movie["Director"]}</i> </div>
						          	<div className="cast"> <b>Cast:</b> <i>{this.props.movie["Actors"]}</i></div>
						          	<div className="genre"> <b>Genre:</b> <i>{this.props.movie["Genre"]}</i></div>
						          </div>
						        </div>
						      </div>
						    </div>
						  </div>
						</div>
				</li>
			);
		}
});

module.exports = MovieIndexItem;