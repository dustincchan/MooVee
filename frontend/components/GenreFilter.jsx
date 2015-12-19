var React = require('react');
var MovieStore = require('../stores/movieList');
var ApiUtil = require('../util/apiUtil.js');
var MovieActions = require('../actions/movieActions');

var GenreFilter = React.createClass({

	componentDidMount: function () {
		$('.ui.form').form({
			fields: {
				fruit: 'empty'
			}
		})
	},

	render: function () {
		return (
			<div id="genre-filter" className="ui form">
			  <div className="inline fields">
			    <label className="ui yellow label">Filter by Genre</label>
			    <div className="field">
			      <div className="ui radio checkbox">
			        <input type="radio" name="fruit" tabIndex="0" className="hidden"/>
			        <label className="genre-field">Action</label>
			      </div>
			    </div>
			    <div className="field">
			      <div className="ui radio checkbox">
			        <input type="radio" name="fruit" tabIndex="0" className="hidden"/>
			        <label className="genre-field">Comedy</label>
			      </div>
			    </div>
			    <div className="field">
			      <div className="ui radio checkbox">
			        <input type="radio" name="fruit" tabIndex="0" className="hidden"/>
			        <label className="genre-field">Herp</label>
			      </div>
			    </div>
			    <div className="field">
			      <div className="ui radio checkbox">
			        <input type="radio" name="fruit" tabIndex="0" className="hidden"/>
			        <label className="genre-field">Derp</label>
			      </div>
			    </div>
			  </div>
			</div>
		);
	}
});

module.exports = GenreFilter;