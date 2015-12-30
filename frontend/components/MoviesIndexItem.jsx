var React = require('react');
var ReactDOM = require('react-dom');
var MovieStore = require('../stores/MovieStore');
var InfoButton = require('./InfoButton')
var MoviePosterOverlay = require('./MoviePosterOverlay');

var MovieIndexItem = React.createClass({
	componentDidMount: function () {
		$('.ui.people.shape').shape();
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
						<div className="ui people shape" id={this.props.movie["imdbID"]}>
						  <div className="sides">
						    <div className="side active">
						      <div className="ui card" id="card-front">
						        <div id="image-container" className="image">
						        	<div className="poster-and-overlay" 
						        		id="poster-and-overlay"
						        		onMouseEnter={this.revealOverlay}
								        onMouseLeave={this.hideOverlay}>
								          <img className="movie-poster" 
								          		onClick={this.handlePosterClicked}
								          		id={this.props.movie["imdbID"]} 
								          		src={this.props.posterLink}>
								          </img>
								          <div ref="overlayRef"  
								          className="overlay-information hidden">
														<MoviePosterOverlay movie={this.props.movie} posterLink={this.props.posterLink}/>
														<div onClick={this.handlePosterClicked} 
																 id="green-info-button" 
																 className="ui green label">Click for More Options</div>
													</div>
							        </div>
						        </div>
						      </div>
						    </div>
						    <div className="side">
						      <div className="ui card" id="card-back">
						        <div className="content">
						          <div id="movie-info-text" className="content">
						          	<div className="title-header"> <u><b>{this.props.movie["Title"]}</b></u></div>
						          	<div className="director"> <b>Directed by:</b> <i>{this.props.movie["Director"]}</i> </div>
						          	<div className="cast"> <b>Cast:</b> <i>{this.props.movie["Actors"]}</i></div>
						          	<div className="genre"> <b>Genre:</b> <i>{this.props.movie["Genre"]}</i></div>
						          	<div className="imdbRating">  
						          		<img id="imdb-rating-icon" src="http://i.imgur.com/oEZd1pe.png"/>
						          		<i>{this.props.movie["imdbRating"]}</i>
						          	</div>
						          	<div className="tomatoMeter"> 
						          		<img id="tomato-rating-icon" src="http://i.imgur.com/h2MZ6mK.png"/>
						          		<i>{this.props.movie["tomatoMeter"]}%</i>
						          	</div>
						          	<InfoButton movieID={this.props.movie["imdbID"]}/>
						          	<div onClick={this.handlePosterClicked} 
																 className="ui red label">Return to Poster</div>
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