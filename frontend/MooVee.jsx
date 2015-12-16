var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Header = require('./components/header');
var Container = require('./components/container');
var ApiUtil = require('./util/apiUtil');
var MovieStore = require('./stores/movieList');
window.ApiUtil = ApiUtil;
window.MovieStore = MovieStore;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Container />
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
  </Route>
);

document.addEventListener("DOMContentLoaded"), function() {
  ReactDOM.render(
    <Router>{routes}</Router>,
      document.getElementById('root')
  );
};
