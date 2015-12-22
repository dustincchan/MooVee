var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants');
var UserStore = new Store(AppDispatcher);

var currentUser = "";

var storeCurrentUser = function (userData) {
	currentUser = userData["username"];
};

UserStore.currentUser = function () {
	return currentUser;
};

UserStore.__onDispatch = function (payload) {
	switch(payload.actionType) {
		case UserConstants.LOGIN_RECEIVED:
			storeCurrentUser(payload.userData);
			UserStore.__emitChange();
			break;
		case UserConstants.USER_RECEIVED:
			storeCurrentUser(payload.userData);
			UserStore.__emitChange();
			break;
	}
};

module.exports = UserStore;