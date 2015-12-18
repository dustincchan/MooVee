var React = require('react');
var ReactRouter = require('react-router');
var Route = require('react-router').Route;
var Navigation = require('react-router').Navigation

var NavBar = React.createClass({
  homeButtonClicked: function () {
    debugger;
    Navigation.trasitionTo('/')
  },

  render: function () {
    return(
    <div className="ui inverted huge menu">
      <a onClick={this.homeButtonClicked} className="active item">Home</a>
      <a className="item">Movie Lists</a>
      <a className="item">My Movie Lists</a>
      <a className="right floated item">Sign up!</a>
      <a className="item">Sign In</a>
    </div>
      );
  }
});

module.exports = NavBar;