var React = require('react');
var ApiUtil = require('../util/ApiUtil');
var MovieStore = require('../stores/MovieStore');
var YouTube = require('react-youtube');


var MoviePosterOverlay = React.createClass({
	getInitialState: function () {
		return {imdbID: this.props.movie["imdbID"], 
						modalClassName: "ui basic modal " + this.props.movie["imdbID"],
						embedClassName: "ui embed " + this.props.movie["imdbID"],
						youtubeEmbedLink: "https://www.youtube.com/embed/" + this.props.movie["trailerId"]
					};
	},

  _onReady: function (event) {
    event.target.pauseVideo();
  },

	componentDidMount: function () {
		$('.ui.embed.' + this.props.movie["imdbID"]).embed();
		this.movieListener = MovieStore.addListener(this._movieUpdated);
	},

	componentWillUnmount: function () {
		this.movieListener.remove();
	},

	_movieUpdated: function () {
		var trailerId = MovieStore.currentMovieTrailer()
		if (MovieStore.currentMovieTrailer() != "" && this.state.youtubeId != trailerId) {
			this.setState({ youtubeId: trailerId});
			this.setState({ youtubeEmbedLink: "https://www.youtube.com/embed/" + trailerId });
		}
	},

	openModal: function () {
		ApiUtil.getYoutubeTrailer(this.props.movie["Title"])
		setTimeout(function () {$('.ui.modal.' + this.state.imdbID).modal('show')}.bind(this), 750); 
		setTimeout(function () {console.log(this.state.youtubeEmbedLink)}.bind(this), 300);
	},

	closeModal: function () {
		$('ui.modal').modal('hide');
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
				  	{this.props.movie["Title"]}
				  </div>
			  		  <div className={this.state.embedClassName}
			  		  	data-source="youtube" 
			  		  	autoplay="true"
			  		  	data-id={this.props.movie["trailerId"]}
			  		  	data-placeholder="http://i.imgur.com/lZUEmui.jpg">
							</div>
				</div>
			</div>
		)
	}
});

module.exports = MoviePosterOverlay;