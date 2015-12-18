var React = require('react');
var MovieIndexItem = React.createClass({

	componentDidMount: function () {
		$('.shape').shape();
	},


	handlePosterClicked: function () {
		$('#'+this.props.movie["imdbID"]).shape('flip right');
	},

	render: function () {
		return (
				<li className="ui image column">
						<div className="ui people shape" id={this.props.movie["imdbID"]}>
						  <div className="sides">
						    <div className="side active">
						      <div className="ui card" id="card-front">
						        <div className="image">
						          <img className="movie-poster" 
						          		id={this.props.movie["imdbID"]} 
						          		src={this.props.posterLink} onClick={this.handlePosterClicked}/>
						        </div>
						        <div className="content">
						          <div id="movie-title" className="header">{this.props.movie["Title"]}</div>
						        </div>
						      </div>
						    </div>
						    <div className="side">
						      <div className="ui card" id="card-back">
						        <div className="content" onClick={this.handlePosterClicked}>
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