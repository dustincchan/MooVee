var React = require('react');
var ReactDOM = require('react-dom');
var Coverflow = require('react-coverflow');

var Welcome = React.createClass({
	componentDidMount: function () {
		$('#navbar').fadeTo(1000, 0);
    $('.ui.inverted.large.menu')
    .on('click', '.nav.item', function() {
      $(this)
        .addClass('active')
        .siblings('.item')
          .removeClass('active');
    });
  },

  clickedMovies: function () {
  	$('#nav-movies-button').addClass('active').siblings('.item').removeClass('active');
  	$('#navbar').fadeTo(1000, 1);
  },

  clickedLists: function () {
  	$('#nav-lists-button').addClass('active').siblings('.item').removeClass('active');
  	$('#navbar').fadeTo(1000, 1);
  },

	render: function () {
		return (
			<div className="backdrop container">
					<img id="welcome-background-image" src='./welcome-backdrop.jpg'/>
					<h1 className="welcome header">Find something to watch.</h1>
					<h2 className="welcome subheader">Quickly browse a database of over 250,000 movies.</h2>
					<div className="welcome buttons container">
						<a 
							onClick={this.clickedMovies}
							href="#/browse" 
							id="browse-movies-button" 
							className="ui inverted blue basic button">BROWSE MOVIES</a>
						<a 
							onClick={this.clickedLists}
							href="#/lists" 
							id="browse-lists-button" 
							className="ui inverted blue basic button">BROWSE LISTS</a>
					</div>
					<div className="carousel container">
						<div className="welcome carousel">
							  <Coverflow width={"auto"} height={"500"}
							    displayQuantityOfSide={2}
							    navigation={false}
							    enableScroll={true}
							    >
							    <img src='/carousel movielist.png' alt='Create Lists' url="/#/browse"/>
							    <img src='./carousel browse.png' alt='Browse Movies' url="/#/browse" />
							    <img src='carousel trailer.png' alt='Watch Trailers' url="/#/browse"/>
							  </Coverflow>
						</div>
					</div>
			</div>
		)

	}
});

module.exports = Welcome;