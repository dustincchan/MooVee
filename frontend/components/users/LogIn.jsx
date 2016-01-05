var React = require('react');
var ApiUtil = require('../../util/ApiUtil');
var UserStore = require('../../stores/UserStore');
var MoviePosterOverlay = require('../MoviePosterOverlay');
var History = require('react-router').History;


var LogIn = React.createClass({
	mixins: [History],

	getInitialState: function () {
		return {
			username: "",
			password: "",
			currentUser: "",
			error: ""
		};
	},

	componentDidMount: function () {
    $('#guest-login-button')
    .on('click', function() {
      $('#nav-movies-button')
        .addClass('active')
        .siblings('.item')
          .removeClass('active');
    });

		$('#signup-button').click(function () {
			this.Login();
		}.bind(this));
		this.userListener = UserStore.addListener(this._userChange);
	},

	_userChange: function () {
		this.setState({ error: UserStore.getError() })
		if (this.state.error === "") { 
			this.setState({ currentUser: UserStore.currentUser() });
			this.props.history.pushState(null, "/browse");
		}
	},

	handleUserChange: function(event) {
		this.setState({username: event.target.value});
	},

	componentWillUnmount: function () {
		this.userListener.remove();
	},

	handlePassChange: function(event) {
		this.setState({password: event.target.value});
	},

	Login: function () {
		ApiUtil.Login({username: $('#username-field').val(), password: $('#password-field').val()});
	},

	guestLogin: function () {
    ApiUtil.loginAsGuest();  

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
					      	value={this.props.guestname}
					      	placeholder="Username"/>
					    </div>
					    <div className="field">
					      <input 
					      	onKeyPress={this.handleKeyPress} 
					      	onChange={this.handlePassChange}
					      	id="password-field" 
					      	type="password" 
					      	value={this.props.guestpass}
					      	placeholder="Password"/>
					    </div>
					  </div>
					  <button type="submit"
					  			 onClick={this.Login} 
					  			 id="signup-button" 
					  			 value="Post"
					  			 className="positive ui button">Log in!
					  </button>
					  <div className="or button divider">or</div>
					  <button id="#guest-login-button" onClick={this.guestLogin} className="ui orange button">Guest Log in!</button>
					  <div className="error-message">{this.state.error}</div>
					</div>
				</div>
			</div>
		);
	}
})

module.exports = LogIn;