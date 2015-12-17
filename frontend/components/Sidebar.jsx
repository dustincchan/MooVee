var React = require('react');

var Sidebar = React.createClass({
  render: function () {
    return(
      <div className="ui left floated vertical inverted sidebar labeled icon menu">
        <a className="item"><i className="home icon"></i>Home</a>
        <a className="item"><i className="block layout icon"></i>Topics</a>
        <a className="item"><i className="smile icon"></i>Friends</a>
      </div>
      );
  }
});

module.exports = Sidebar;