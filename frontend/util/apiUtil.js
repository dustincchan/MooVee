var MovieActions = require('../actions/movieActions.js');

module.exports = {
  fetchFromIMDB: function(searchString) {
  	var formattedString = searchString.split(' ').join('+');
    $.ajax({
    	type: "GET",
      url: "http://www.omdbapi.com/?s=" + formattedString + "&plot=full",
      dataType: 'json',
      success: function (data) {
        MovieActions.receiveSearchData(data);
      }
    });
  }
};
