var React = require('react');

var SignUp = React.createClass({
	getUsernameValue: function() {},

	render: function () {
		return (
			<div id="sign-up-background" className="ui one column stackable center aligned page grid">
				<div id="login-box" className="column seven wide">
					<h2 id="signup-header" className="ui icon header">
						<img className="ui small image" src="http://i.imgur.com/Q1nTFAg.png"/><br/>
						<div id="signup-label" className="ui huge black label">SIGN UP!</div>
					</h2>
					<div className="ui form">
					  <div className="login-fields">
					    <div className="field">
					      <label className="ui pointing below blue basic label">New User</label>
					      <input id="username-field" type="text" placeholder="Username"/>
					    </div>
					    <div className="field">
					      <label className="ui pointing below blue basic label">New Password</label>
					      <input id="password-field" type="password" placeholder="Password"/>
					    </div>
					  </div>
					  <button onClick={this.handleSubmit} id="signup-button" className="positive ui button">Sign Up!</button>
					</div>
				</div>
			</div>
		);
	}
})

module.exports = SignUp;