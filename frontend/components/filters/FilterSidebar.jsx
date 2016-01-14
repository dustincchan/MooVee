var React = require('react');
var FilterStore = require('../../stores/FilterStore');
var MovieStore = require('../../stores/MovieStore');
var MoviesSearch = require('../MoviesSearch');
var RatingSlider = require('./RatingSlider');
var FilterActions = require('../../actions/filterActions');
var YearFilter = require('./YearFilter');
var ReactDOM = require('react-dom');

var Sidebar = React.createClass ({
  componentDidMount: function () {
    $('.ui.menu')
    .on('click', '.genre.item', function() {
      $('#movies-loading-dimmer').show();
      setTimeout(function() { $('#movies-loading-dimmer').hide(); }.bind(this), 2000);
      genreValue = this.attributes[1]["value"];
      FilterActions.receiveGenreFilter(genreValue);
      $(this)
        .addClass('active')
        .siblings('.item')
          .removeClass('active');
    });

    $('.genre.item').on('click', function () {
      MovieStore.browseMode();
    }.bind(this))
  },

  resetFilters: function () {
    FilterActions.resetFilters();
  },

  render: function () {
    return (
    <div className="ui inverted vertical menu">
      <div/>
      <div className="item">
        <MoviesSearch/>
      </div>
      
      <YearFilter/>

      <RatingSlider/>
      <div className="item"/>
      <div className="item" id="genre-header">
        Genre
      </div>

      <div className="genre item active" value="">All</div>
      <div className="genre item" value="28">Action</div>
      <div className="genre item" value="12">Adventure</div>
      <div className="genre item" value="16">Animation</div>
      <div className="genre item" value="35">Comedy</div>
      <div className="genre item" value="80">Crime</div>
      <div className="genre item" value="99">Documentary</div>
      <div className="genre item" value="18">Drama</div>
      <div className="genre item" value="10751">Family</div>
      <div className="genre item" value="14">Fantasy</div>
      <div className="genre item" value="10769">Foreign</div>
      <div className="genre item" value="36">History</div>
      <div className="genre item" value="27">Horror</div>
      <div className="genre item" value="10402">Music</div>
      <div className="genre item" value="9648">Mystery</div>
      <div className="genre item" value="10749">Romance</div>
      <div className="genre item" value="878">Science Fiction</div>
      <div className="genre item" value="10770">TV Movie</div>
      <div className="genre item" value="53">Thriller</div>
      <div className="genre item" value="10752">War</div>
      <div className="genre item" value="37">Western</div>
      <div className="item">
        <div onClick={this.resetFilters} className="positive ui button">Reset Filters</div>
      </div>
    </div>


      )
  }
})

module.exports = Sidebar;