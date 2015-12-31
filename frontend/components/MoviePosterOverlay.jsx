var React = require('react');
var ApiUtil = require('../util/ApiUtil');
var MovieStore = require('../stores/MovieStore');


var MoviePosterOverlay = React.createClass({
	getInitialState: function () {
		return {imdbID: this.props.movie["imdbID"], 
						modalClassName: "ui basic modal " + this.props.movie["imdbID"],
						embedClassName: "ui embed " + this.props.movie["imdbID"],
						thumbLink: "http://img.youtube.com/vi/" + this.props.movie["trailerId"] + "/hqdefault.jpg"
					};
	},

  _onReady: function (event) {
    event.target.pauseVideo();
  },

	componentDidMount: function () {
		$('.ui.embed.' + this.props.movie["imdbID"]).embed();
	},

	openModal: function () {
		$('.ui.modal.' + this.state.imdbID)
			.modal({
				onHide: function () { this.closeModal() }.bind(this)
			})
			.modal('show');
	},

	closeModal: function () {
		$('.ui.embed.' + this.props.movie["imdbID"]).embed('reset');
	},

	render: function () {
		const opts = {
      height: '390',
      width: '640',
      playerVars: { autoplay: 1 }
    };
		return (
			<div className="overlay and modal">
				<div className="ui massive grey label">
					<h4 id="movie-title"> {this.props.movie["Title"]} </h4>
						<i onClick={this.openModal}
						 	 className="huge video play outline icon"
						 	 type="button"/>
					<h5 id="play-trailer-text">(Play Trailer)</h5>
				</div>

				<div className={this.state.modalClassName} id={this.props.movie["imdbID"]}>
				  <i className="close icon" onClick={this.closeModal}></i>
				  <div className="header">
				  	{this.props.movie["Title"] + " Trailer"}
				  </div>
			  		  <div className={this.state.embedClassName}
			  		  	data-source="youtube" 
			  		  	data-id={this.props.movie["trailerId"]}
			  		  	data-placeholder={this.state.thumbLink}>
							</div>
				</div>
			</div>
		)
	}
});

module.exports = MoviePosterOverlay;