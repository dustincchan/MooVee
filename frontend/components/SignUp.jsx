var React = require('react');

var SignUp = React.createClass({
	render: function () {
		return (
			<div id="sign-up-background" className="ui one column stackable center aligned page grid">
				<div className="column seven wide">
					<div className="ui form">
					  <div className="fields">
					    <div className="field">
					      <label>Username</label>
					      <input type="text" placeholder="Username"/>
					    </div>
					    <div className="field">
					      <label>Password</label>
					      <input type="password" placeholder="Password"/>
					    </div>
					  </div>
					</div>
				</div>
			</div>
		);
	}
})

module.exports = SignUp;