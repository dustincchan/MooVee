var React = require('react');

var SignUp = React.createClass({
	render: function () {
		return (
			<div id="sign-up-background" className="ui one column stackable center aligned page grid">
				<div id="login-box" className="column seven wide">
					<div className="ui form">
					  <div className="login-fields">
					    <div className="field">
					      <label>New User</label>
					      <input type="text" placeholder="Username"/>
					    </div>
					    <div className="field">
					      <label>New Password</label>
					      <input type="password" placeholder="Password"/>
					    </div>
					  </div>
					</div>
					<button id="signup-button" className="positive ui button">Sign Up!</button>
				</div>
			</div>
		);
	}
})

module.exports = SignUp;