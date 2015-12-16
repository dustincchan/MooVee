var Dispatcher = require('../dispatcher/dispatcher');
var MovieConstants = require('../constants/movieConstants');

module.exports = {
  receiveSearchData: function (data) {
    Dispatcher.dispatch({
      actionType: MovieConstants.SEARCHDATA_RECEIVED,
      data: data
    });
  }
};
