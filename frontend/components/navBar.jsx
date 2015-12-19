var React = require('react');
var ReactRouter = require('react-router');
var Route = require('react-router').Route;
var Navigation = require('react-router').Navigation;

var NavBar = React.createClass({
  render: function () {
    return(
    <div className="ui inverted huge menu">
      <a href="#" className="ui active item">Home</a>
      <a href="#/lists/" className="item">Movie Lists</a>
      <a className="item">My Movie Lists</a>
      <a href="#/session/new" className="right floated item">Guest Log In</a>
      <a href="#/users/new" className="item">Sign up!</a>
      <a href="#/session/new" className="item">Log In</a>
    </div>
      );
  }
});

module.exports = NavBar;