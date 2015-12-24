var React = require('react');
var ReactRouter = require('react-router');
var Route = require('react-router').Route;
var Navigation = require('react-router').Navigation;
var UserStore = require('../stores/UserStore');
var UserActions = require('../actions/userActions');
var ApiUtil = require('../util/ApiUtil');

var NavBar = React.createClass({
  getInitialState: function () {
    return {currentUser: UserStore.currentUser()}
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._userChanged);
  },

  guestLogin: function () {
    ApiUtil.loginAsGuest();  
  },

  _userChanged: function () {
    this.setState({currentUser: UserStore.currentUser()})
  },

  render: function () {
    if (UserStore.currentUser() === "") {
      return(
        <div className="ui inverted large menu">
          <a href="#" className="ui active item">Home</a>
          <a href="#/lists/" className="item">Movie Lists</a>
          <a className="item">My Movie Lists</a>
          <a href="#" onClick={this.guestLogin} className="right floated item">Guest Log In</a>
          <a href="#/users/new" className="item">Sign up!</a>
          <a href="#/session/new" className="item">Log In</a>
        </div>
        );
    } else {
      return (
        <div className="ui large menu">
          <a href="#" className="ui active item">Home</a>
          <a href="#/lists/" className="item">Movie Lists</a>
          <a className="item">My Movie Lists</a>
          <a className="right floated item">{this.state.currentUser}</a>
          <a className="item">Log Out</a>
        </div>  
      );
    }
  }
});

module.exports = NavBar;