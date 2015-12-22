var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/userConstants');

module.exports = {
	receiveUserLogin: function (userData) {
		Dispatcher.dispatch({
			actionType: UserConstants.LOGIN_RECEIVED,
			userData: userData
		})
	},

	receiveBadLogin: function (message) {
		Dispatcher.dispatch({
			actionType: UserConstants.BAD_LOGIN,
			message: message
		})
	},

	receiveBadUserParams: function (message) {
		Dispatcher.dispatch({
			actionType: UserConstants.BAD_USER,
			message: message
		})
	},

	receiveNewUser: function (userData) {
		Dispatcher.dispatch({
			actionType: UserConstants.USER_RECEIVED,
			userData: userData
		})
	}
};
