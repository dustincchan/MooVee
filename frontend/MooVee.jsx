//react and react router
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;


//flux/stores
var FilterStore = require('./stores/FilterStore');
var MovieStore = require('./stores/movieList');
var UserStore = require('./stores/UserStore');
var MoviesIndex = require('./components/moviesIndex');
var NavBar = require('./components/navBar');
var ApiUtil = require('./util/apiUtil');

//users
var LogIn = require('./components/users/LogIn');
var SignUp = require('./components/users/SignUp');


//movie lists
var MovieLists = require('./components/lists/MovieLists');
var GenreFilter = require('./components/GenreFilter');

window.ApiUtil = ApiUtil;
window.MovieStore = MovieStore;
window.UserStore = UserStore

var App = React.createClass({
  render: function() {
    return (
      <div className="everything">
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={MoviesIndex}/>
    <Route path="users/new" component={SignUp}/>
    <Route path="session/new" component={LogIn}/>
  </Route>
);


document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById('root');
  ReactDOM.render(
    <Router>{routes}</Router>, root
    );
});
