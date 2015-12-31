var MovieActions = require('../actions/movieActions.js');
var UserActions = require('../actions/userActions');
var FilterStore = require('../stores/FilterStore');
var FilterActions = require('../actions/filterActions');
var MovieStore = require('../stores/MovieStore');


module.exports = {
  resetStore: function() {
    MovieActions.resetStore();
  },

  getYoutubeTrailer: function (movieTitle) {
    var key = "&key=AIzaSyBUH_-Cg2LiNdKE79Yw3zl8EKJz1MOrgtc";
    var query = "&q=" + movieTitle.split(' ').join('+') + "trailer";
    $.ajax({
      type: "GET",
      url: "https://www.googleapis.com/youtube/v3/search?part=id" + query + "&type=video" + key,
      dataType: 'json',
      success: function (data) {
        return data["items"][0]["id"]["videoId"];
       },
      error: function (e) {
        console.log(e);
      }
    })
  },

  fetchFromIMDB: function (searchString) {
  	var formattedString = searchString.split(' ').join('+');
    var tempMoves = [];
    $.ajax({
    	type: "GET",
      url: "https://www.omdbapi.com/?s=" + formattedString + "&plot=full&r=json&tomatoes=true",
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
    console.log(filters);
    MovieStore.resetMovieLists();
    var url = 'https://api.themoviedb.org/3/discover/movie', 
        genreFilter = '',
        ratingFilter = '',
        yearFilter = '',
        pageNum = '1',
        key = '?api_key=1065f29f8db79281f9c287d5ef2ba938';

    if (filters !== undefined) {
      if (filters['genre'] === "" || filters['genre'] === undefined) {
        genreFilter = ""
      } else { genreFilter = '&with_genres=' + filters['genre'] }

      if (filters['rating'] === "" || filters['rating'] === undefined) {
        ratingFilter = ""
      } else { ratingFilter = '&vote_average.gte=' + filters['rating'] }

      if (filters['year'] === "" || filters['year'] === undefined) {
        yearFilter = ""
      } else { yearFilter = '&year=' + filters['year'] }

      if (filters['pageNum'] === "" || filters['pageNum'] === undefined) {
        pageNum = "1"
      } else { pageNum = filters['pageNum'] }
    }
        $.ajax({
            type: 'GET',
            url: url + key + genreFilter + yearFilter + ratingFilter 
            + '&vote_count.gte=1&page='+pageNum,
            async: false,
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function (data) {
              FilterActions.receiveNumPages(data["total_pages"]);
              data['results'].forEach(function(movie) {
                var title = movie["title"];
                var year = movie["release_date"].slice(0,4);

                $.ajax({
                  type: "GET",
                  url: "https://www.omdbapi.com/?t=" 
                        + title + "&y=" + year + "&plot=full&r=json&tomatoes=true",
                  dataType: 'json',
                  success: function (data) {
                    if (data["Response"] !== "False") { 
                      
                      var key = "&key=AIzaSyBUH_-Cg2LiNdKE79Yw3zl8EKJz1MOrgtc";
                      var query = "&q=" + data["Title"].split(' ').join('+') + "trailer";
                      $.ajax({
                        type: "GET",
                        movieData: data,
                        url: "https://www.googleapis.com/youtube/v3/search?part=id" + query + "&type=video" + key,
                        dataType: 'json',
                        success: function (data) {
                          var movie = this.movieData;
                          movie["trailerId"] = data["items"][0]["id"]["videoId"];
                          MovieActions.receiveBrowseMovie(movie);
                         },
                        error: function (e) {
                          console.log(e);
                        }
                      })
                    }
                  }.bind(this),
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
};
