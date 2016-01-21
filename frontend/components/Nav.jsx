var React = require('react');
var ReactRouter = require('react-router');
var Route = require('react-router').Route;
var Navigation = require('react-router').Navigation;
var UserStore = require('../stores/UserStore');
var UserActions = require('../actions/userActions');
var ApiUtil = require('../util/ApiUtil');
var Login = require('./users/LogIn');

var NavBar = React.createClass({
  getInitialState: function () {
    return {currentUser: UserStore.currentUser()}
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this._userChanged);
    $('.ui.inverted.large.menu')
    .on('click', '.nav.item', function() {
      $(this)
        .addClass('active')
        .siblings('.item')
          .removeClass('active');
    });
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  _userChanged: function () {
    this.setState({currentUser: UserStore.currentUser()})
  },

  render: function () {
    if (UserStore.currentUser() === "") {
      return(
        <div id="navbar" className="ui inverted large menu">
          <a id="nav-movies-button" href="#/browse" className="ui nav item">Movies</a>
          <a id="nav-lists-button" href="#/lists/" className="nav item">Movie Lists</a>
          <a href="#/session/new" className="ui inverted blue button"><i className="ui plus icon"/>Create a Movie List</a>
          <a href="#/users/new" className="right floated nav item">Sign up!</a>
          <a href="#/session/new" className="nav item">Log In</a>
        </div>
        );
    } else {
      return (
        <div id="navbar" className="ui inverted large menu">
          <a id="nav-movies-button" href="#/browse" className="ui active nav item">Browse Movies</a>
          <a id="nav-lists-button" href="#/lists/" className="nav item">Browse Movie Lists</a>
          <a href="#/lists/new" className="ui inverted blue button"><i className="ui plus icon"/>Create a Movie List</a>
          <div className="right floated inactive item">{this.state.currentUser}</div>
          <a className="item">Log Out</a>
        </div>  
      );
    }
  }
});

module.exports = NavBar;