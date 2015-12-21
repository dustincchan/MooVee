var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var UserStore = require('../../stores/UserStore');

var SignUp = React.createClass({
	getInitialState: function() {
		return {
			username: "",
			password: ""
		};
	},

	componentDidMount: function () {
		this.userListener = UserStore.addListener(this._userChange);
	},

	_userChange: function () {
		this.props.history.pushState(null, "/");
	},

	handleUserChange: function(event) {
		this.setState({username: event.target.value});
	},

	handlePassChange: function(event) {
		this.setState({password: event.target.value});
	},

	Signup: function () {
		ApiUtil.SignUp({username: this.state.username, password: this.state.password})
	},

	handleKeyPress: function (event) {
		if (event.charCode === 13) {
			this.Signup();
		}
	},

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
					      <input 
					      	onChange={this.handleUserChange} 
					      	id="username-field" 
					      	type="text" 
					      	placeholder="Username"/>
					    </div>
					    <div className="field">
					      <label className="ui pointing below blue basic label">New Password</label>
					      <input 
					      	onChange={this.handlePassChange} 
					      	onKeyPress={this.handleKeyPress}
					      	id="password-field" 
					      	type="password" placeholder="Password"/>
					    </div>
					  </div>
					  <button onClick={this.Signup} id="signup-button" className="positive ui button">Sign Up!</button>
					</div>
				</div>
			</div>
		);
	}
})

module.exports = SignUp;