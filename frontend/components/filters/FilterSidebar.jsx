var React = require('react');
var MoviesSearch = require('../MoviesSearch');
var RatingSlider = require('./RatingSlider');
var ReactDOM = require('react-dom');

var Sidebar = React.createClass ({
  componentDidMount: function () {
  },

  render: function () {
    return (
    <div className="ui inverted vertical menu">
      <div/>
      <div className="item">
        <MoviesSearch/>
      </div>
      <div className="item">
        Home
        <div className="menu">
          <a className="active item">Search</a>
          <a className="item">Add</a>
          <a className="item">Remove</a>
        </div>
      </div>
      <RatingSlider/>
    </div>
      )
  }
})

module.exports = Sidebar;