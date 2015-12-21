var React = require('react');
var ApiUtil = require('../../util/apiUtil');
var UserStore = require('../../stores/UserStore');

var LogIn = React.createClass({
	getInitialState: function () {
		return {
			username: "",
			password: "",
			currentUser: ""
		};
	},

	componentDidMount: function () {
		this.userListener = UserStore.addListener(this._userChange);
	},

	_userChange: function () {
		this.setState({ currentUser: UserStore.currentUser() });
		this.props.history.pushState(null, "/");
	},

	handleUserChange: function(event) {
		this.setState({username: event.target.value});
	},

	handlePassChange: function(event) {
		this.setState({password: event.target.value});
	},

	Login: function () {
		ApiUtil.Login({username: this.state.username, password: this.state.password});
	},

	handleKeyPress: function (event) {
		if (event.charCode === 13) {
			this.Login();
		}
	},

	render: function () {
		return (
			<div id="sign-up-background" className="ui one column stackable center aligned page grid">
				<div id="login-box" className="column seven wide">
					<h2 id="signup-header" className="ui icon header">
						<img className="ui small image" src="https://i.imgur.com/Q1nTFAg.png"/><br/>
						<div id="signup-label" className="ui huge black label">LOG IN!</div>
					</h2>
					<div className="ui form">
					  <div className="login-fields">
					    <div className="field">
					      <input 
					      	onChange={this.handleUserChange} 
					      	id="username-field" 
					      	type="text" 
					      	placeholder="Username"/>
					    </div>
					    <div className="field">
					      <input 
					      	onKeyPress={this.handleKeyPress} 
					      	onChange={this.handlePassChange}
					      	id="password-field" 
					      	type="password" 
					      	placeholder="Password"/>
					    </div>
					  </div>
					  <button type="submit"
					  			 onClick={this.Login} 
					  			 id="signup-button" 
					  			 value="Post"
					  			 className="positive ui button">Log in!</button>
					</div>
				</div>
			</div>
		);
	}
})

module.exports = LogIn;