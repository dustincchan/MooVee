var MovieActions = require('../actions/movieActions.js');

module.exports = {
  fetchFromItunes: function() {
    $.ajax({
      url: 'https://itunes.apple.com/search?media=all&term=lord+of+the+rings',
      dataType: 'jsonp',
      success: function (data) {
        MovieActions.receiveSearchData(data);
      }
    });
  }
};
