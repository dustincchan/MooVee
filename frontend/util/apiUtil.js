var MovieActions = require('../actions/movieActions.js');
var UserActions = require('../actions/userActions');
var FilterStore = require('../stores/FilterStore');
var MovieStore = require('../stores/movieList');


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
      },
      error: function (e) {
        UserActions.receiveBadUserParams(e["responseText"])
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
      },
      error: function (e) {
        UserActions.receiveBadLogin(e["responseText"])
      }
    })
  },

  loginAsGuest: function () {
    $.ajax({
      type: "POST",
      url: "api/session/",
      data: {user: {username: "Guest", password: "guesty"}},
      success: function (data) {
        UserActions.loginGuest(data);
      }
    })
  },

  getMasterList: function(filters) {
    MovieStore.resetMovieLists();
    for (var pageNum = 1; pageNum <= 2; pageNum++) {
      var url = 'https://api.themoviedb.org/3/discover/movie', 
          genreFilter = '',
          ratingFilter = '',
          yearFilter = '',
          key = '?api_key=1065f29f8db79281f9c287d5ef2ba938';

      if (filters !== undefined) {
        if (filters['genre'] === "" || filters['genre'] === undefined) {
          genreFilter = ""
        } else { genreFilter = '&with_genres=' + filters['genre'] }

        if (filters['rating'] === "" || filters['rating'] === undefined) {
          ratingFilter = ""
        } else { ratingFilter = '&vote_average.gte=' + filters['rating'] }
      }
          $.ajax({
              type: 'GET',
              url: url + key + genreFilter + ratingFilter + '&vote_count.gte=100&page='+pageNum,
              async: false,
              contentType: 'application/json',
              dataType: 'jsonp',
              success: function (data) {
                data['results'].forEach(function(movie) {
                  var title = movie["title"];
                  var year = movie["release_date"].slice(0,4);

                  $.ajax({
                    type: "GET",
                    url: "https://www.omdbapi.com/?t=" 
                          + title + "&y=" + year + "&plot=full&r=json",
                    dataType: 'json',
                    success: function (data) {
                      if (data["Response"] !== "False") { 
                        MovieActions.receiveBrowseMovie(data);
                      }
                    },
                    error: function (e) {
                      console.log(e);
                    }
                  });
                }.bind(this));
              },
              error: function(e) {
                  console.log(e);
              }
      });
    }
  }
};
