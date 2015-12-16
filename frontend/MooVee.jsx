var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var ApiUtil = require('./util/apiUtil');
var MovieStore = require('./stores/movieList');
var MoviesIndex = require('./components/moviesIndex');
window.ApiUtil = ApiUtil;
window.MovieStore = MovieStore;

var App = React.createClass({
  render: function() {
    return (

      <div className="everything">
        <div className="ui inverted menu">
          <a className="active item">
            Home
          </a>
          <a className="item">
            Movie Lists
          </a>
          <a className="item">
            My Movie Lists
          </a>
          <a className="right floated item">
            Sign up!
          </a>
          <a className="item">
            Sign In
          </a>
        </div>
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
