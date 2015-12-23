var React = require('react');

var Sidebar = React.createClass ({
  render: function () {
    return (
    <div className="ui vertical menu">
      <div className="item">
        <div className="ui input"><input type="text" placeholder="Search..."/></div>
      </div>
      <div className="item">
        Home
        <div className="menu">
          <a className="active item">Search</a>
          <a className="item">Add</a>
          <a className="item">Remove</a>
        </div>
      </div>
      <a className="item">
        <i className="grid layout icon"></i> Browse
      </a>
      <a className="item">
        Messages
      </a>
      <div className="ui dropdown item">
        More
        <i className="dropdown icon"></i>
        <div className="menu">
          <a className="item"><i className="edit icon"></i> Edit Profile</a>
          <a className="item"><i className="globe icon"></i> Choose Language</a>
          <a className="item"><i className="settings icon"></i> Account Settings</a>
        </div>
      </div>
    </div>
      )
  }
})

module.exports = Sidebar;