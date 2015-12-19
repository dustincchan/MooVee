var React = require('react');
var MovieStore = require('../stores/movieList');
var InfoButton = require('./InfoButton')
var MovieIndexItem = React.createClass({

	componentDidMount: function () {
		$('.shape').shape();
	},

	handlePosterClicked: function () {
		$('#'+this.props.movie["imdbID"]).shape('flip right');
	},

	render: function () {
		return (
				<li id="image-column" className="ui image column">
						<div className="ui people shape" id={this.props.movie["imdbID"]}>
						  <div className="sides">
						    <div className="side active">
						      <div className="ui card" id="card-front">
						        <div className="image">
						        	<div className="poster and info-button">
							          <img className="movie-poster" 
							          		onClick={this.handlePosterClicked}
							          		id={this.props.movie["imdbID"]} 
							          		src={this.props.posterLink}/>
							          <InfoButton/>
							         </div>
						        </div>
						        <div id="movie-title" className="content">
						          <div onClick={this.handlePosterClicked} className="header">{this.props.movie["Title"]}</div>
						        </div>
						      </div>
						    </div>
						    <div className="side">
						      <div onClick={this.handlePosterClicked} className="ui card" id="card-back">
						        <div className="content">
						          <a className="header">Description</a>
						          <div className="description">
						         	{this.props.plot}
						          </div>
						          <br/>
						          <div className="content">
						          	<div className="ui header">More Info</div>
						          	<div className="director"> Directed by: {this.props.movie["Director"]} </div>
						          	<div className="cast"> Cast: {this.props.movie["Actors"]} </div>
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