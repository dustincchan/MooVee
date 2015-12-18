var MovieActions = require('../actions/movieActions.js');

module.exports = {
  resetStore: function() {
    MovieActions.resetStore();
  },

  fetchFromIMDB: function(searchString) {
  	var formattedString = searchString.split(' ').join('+');
    var tempMoves = [];
    $.ajax({
    	type: "GET",
      url: "http://www.omdbapi.com/?s=" + formattedString + "&plot=full",
      dataType: 'json',
      success: function (data) {
        data['Search'].forEach(function(movie) {
          var imdbID = movie['imdbID'];

          $.ajax({
            type: "GET",
            url: "http://www.omdbapi.com/?i=" + imdbID + "&plot=full&r=json",
            dataType: 'json',
            success: function (data) {
              MovieActions.receiveSingleMovie(data);
            }
          });
        }.bind(this));
      }
    });
  },
};
