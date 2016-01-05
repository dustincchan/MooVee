var React = require('react');
var ReactDOM = require('react-dom');
var Coverflow = require('react-coverflow');

var Welcome = React.createClass({
	componentDidMount: function () {
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
  },

  clickedLists: function () {
  	$('#nav-lists-button').addClass('active').siblings('.item').removeClass('active');
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

					<div className="welcome carousel container">
					  <Coverflow width={"2000"} height={"500"}
					    displayQuantityOfSide={2}
					    navigation={false}
					    enableScroll={true}
					    >
					    <img src='./carousel browse.png' alt='Browse Movies' url="./carousel browse.png" />
					    <img src='/carousel movielist.png' alt='Create Lists' url="./carousel movielist.png"/>
					    <img src='carousel trailer.png' alt='Watch Trailers' url="./carousel trailer.png"/>
					  </Coverflow>
					</div>
			</div>
		)

	}
});

module.exports = Welcome;