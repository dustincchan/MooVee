var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var ApiUtil = require('./util/apiUtil');
var MovieStore = require('./stores/movieList');
var MoviesIndex = require('./components/moviesIndex');
var NavBar = require('./components/navBar');
window.ApiUtil = ApiUtil;
window.MovieStore = MovieStore;

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
  </Route>
);


document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById('root');
  ReactDOM.render(
    <Router>{routes}</Router>, root
    );
});
