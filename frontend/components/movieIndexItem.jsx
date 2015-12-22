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
							          <InfoButton className="info-button"	movieID={this.props.movie["imdbID"]}/>
							        </div>
						        </div>
						        <div onClick={this.handlePosterClicked} id="movie-title" className="content">
						          <div className="header">{this.props.movie["Title"]}</div>
						          <div className="footer">
						          	<div className="movie-year">{this.props.movie["Year"]}</div>
						          	<img id="imdb-icon" src="http://i.imgur.com/Nr2iFBF.png"/>
						          	<div id="imdb-rating"><b>{this.props.movie["imdbRating"]}</b></div>
						          </div>
						        </div>
						      </div>
						    </div>
						    <div className="side">
						      <div onClick={this.handlePosterClicked} className="ui card" id="card-back">
						        <div className="content">
						          <a className="header">Description</a>
						          <div className="description">
						         	<i>{this.props.plot}</i>
						          </div>
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