var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants');
var UserStore = new Store(AppDispatcher);

var currentUser = "";
var error = "";

var storeCurrentUser = function (userData) {
	currentUser = userData["username"];
};

var addError = function(message) {
	error = message;
};

var resetError = function(message) {
	error = "";
};

UserStore.getError = function() {
	return error;
};

UserStore.currentUser = function () {
	return currentUser;
};

UserStore.__onDispatch = function (payload) {
	switch(payload.actionType) {
		case UserConstants.LOGIN_RECEIVED:
			resetError();
			storeCurrentUser(payload.userData);
			UserStore.__emitChange();
			break;
		case UserConstants.USER_RECEIVED:
			resetError();
			storeCurrentUser(payload.userData);
			UserStore.__emitChange();
			break;
		case UserConstants.BAD_LOGIN:
			addError(payload.message);
			UserStore.__emitChange();
			break;
		case UserConstants.BAD_USER:
			addError(payload.message);
			UserStore.__emitChange();
			break;
		}

};

module.exports = UserStore;