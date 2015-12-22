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
  },

  getMasterList: function() {
    var url = 'https://api.themoviedb.org/3/discover/movie',

        key = '?api_key=1065f29f8db79281f9c287d5ef2ba938';
        $.ajax({
            type: 'GET',
            url: url + key + '&sort_by=vote_average.desc&vote_count.gte=100&page=1',
            async: false,
            jsonpCallback: 'testing',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function (data) {
              data['results'].forEach(function(movie) {
                var title = movie["title"];
                var year = movie["release_date"].slice(0,4);

                $.ajax({
                  type: "GET",
                  url: "https://www.omdbapi.com/?t=" + title + "&y=" + year + "&plot=full&r=json",
                  dataType: 'json',
                  success: function (data) {
                    MovieActions.receiveBrowseMovie(data);
                  }
                });
              }.bind(this));
            },
            error: function(e) {
                console.log(e.message);
            }
    });
  }
};
