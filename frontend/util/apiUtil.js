var MovieActions = require('../actions/movieActions.js');
var UserActions = require('../actions/userActions');

module.exports = {
  resetStore: function() {
    MovieActions.resetStore();
  },

  fetchFromIMDB: function(searchString) {
  	var formattedString = searchString.split(' ').join('+');
    var tempMoves = [];
    $.ajax({
    	type: "GET",
      url: "https://www.omdbapi.com/?s=" + formattedString + "&plot=full",
      dataType: 'json',
      success: function (data) {
        data['Search'].forEach(function(movie) {
          var imdbID = movie['imdbID'];

          $.ajax({
            type: "GET",
            url: "https://www.omdbapi.com/?i=" + imdbID + "&plot=full&r=json",
            dataType: 'json',
            success: function (data) {
              MovieActions.receiveSingleMovie(data);
            }
          });
        }.bind(this));
      }
    });
  },

  SignUp: function(params) {
    $.ajax({
      type: "POST",
      url: "api/users/",
      data: {user: params},
      success: function (data) {
        UserActions.receiveNewUser(data);
      }
    })
  },

  Login: function(params) {
    $.ajax({
      type: "POST",
      url: "api/session/",
      data: {user: params},
      success: function (data) {
        UserActions.receiveUserLogin(data);
      }
    })
  }
};
