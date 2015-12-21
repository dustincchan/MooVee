var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/userConstants');

module.exports = {
	receiveUserLogin: function (userData) {
		Dispatcher.dispatch({
			actionType: UserConstants.LOGIN_RECEIVED,
			userData: userData
		})
	},

	receiveNewUser: function (userData) {
		Dispatcher.dispatch({
			actionType: UserConstants.USER_RECEIVED,
			userData: userData
		})
	}
};
