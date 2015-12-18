var React = require('react');

var NavBar = React.createClass({
  render: function () {
    return(
    <div className="ui inverted huge menu">
      <a className="active item">Home</a>
      <a className="item">Movie Lists</a>
      <a className="item">My Movie Lists</a>
      <a className="right floated item">Sign up!</a>
      <a className="item">Sign In</a>
    </div>
      );
  }
});

module.exports = NavBar;