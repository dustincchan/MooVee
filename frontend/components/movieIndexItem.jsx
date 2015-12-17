var React = require('react');
var MovieIndexItem = React.createClass({

	componentDidMount: function () {
		$('.shape').shape();
	},

	handlePosterClicked: function () {
		$('.shape').shape('flip right');
	},

	render: function () {
		return (
				<li className="ui image column">
					<p className="ui blue label column" id="blue-label">{this.props.movie["Title"]}</p>

						<div className="ui people shape" id={this.props.movie["imdbID"]}>
						  <div className="sides">
						    <div className="side active">
						      <div className="ui card">
						        <div className="image">
						          <img onClick={this.handlePosterClicked} src={this.props.posterLink}/>
						        </div>
						        <div className="content">
						          <div className="header">{this.props.movie["Title"]}</div>
						          <div className="description">
						            Steve Jobes is a fictional character designed to resemble someone familiar to readers.
						          </div>
						        </div>
						      </div>
						    </div>
						    <div className="side" onClick={this.handlePosterClicked}>
						      <div className="ui card">
						        <div className="content">
						          <a className="header">Description</a>
						          <div className="description">
						            Movie dsecription goes here. blah blah blah blah blah blah blabh balh sdlkfjsldkfjoeij
						          </div>
						        </div>
						        <div className="extra content">
						          <a>
						            <i className="user icon"></i>
						            22 Friends
						          </a>
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