var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var root = document.getElementById('content');
var IndexRoute = ReactRouter.IndexRoute;

var Header = require('./components/header');
var Container = require('./components/container');
var ApiUtil = require('./util/apiUtil');
var MovieStore = require('./stores/movieList');
var MoviesIndex = require('./components/moviesIndex');
window.ApiUtil = ApiUtil;
window.MovieStore = MovieStore;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header><h1>MooVee</h1></header>
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


ReactDOM.render(<Router>{routes}</Router>, root);
