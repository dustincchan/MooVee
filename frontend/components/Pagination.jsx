var React = require('react');
var FilterStore = require('../stores/FilterStore');
var FilterActions = require('../actions/filterActions');


var Pagination = React.createClass ({
	getInitialState: function () {
		return { numPages: '', currentPage: 1, pagesArray: [] }
	},

  componentDidMount: function () {
  	this.filterListener = FilterStore.addListener(this._onChange)
  	$('.ui.pagination.menu')
    .on('click', '.item', function() {
    	FilterActions.receivePageChange(this.text);
      $(this)
        .addClass('active')
        .siblings('.item')
          .removeClass('active');
    });
  },

  componentWillUnmount: function () {
  	this.filterListener.remove();
  },

  setPageList: function (array) {
    this.setState({ pagesArray: array });
  },

  _onChange: function () {
  	if (this.state.numPages != FilterStore.all()['numPages']) {
  		this.setState ({ numPages: FilterStore.all()['numPages'] });
      this.determinePagination();
    }

    if (this.state.currentPage != FilterStore.all()['pageNum']) {
      this.setState({ currentPage: FilterStore.all()['pageNum'] });
      this.determinePagination();
    }

  },

  determinePagination: function () {
    var pagesArray = [];
    var numPages = this.state.numPages;
    var currentPage = this.state.currentPage;
    if (this.state.currentPage === 1) {
      if (this.state.numPages > 7) {
        this.setPageList([1, 2, 3, 4, 5, 6, 7, "...", numPages]);
      } else if (this.state.numPages <= 7) {
        for (var i = 1; i <= numPages; i++) {
          pagesArray.push(i);
        }
        this.setPageList(pagesArray);
      }
    } else {

      if (this.state.numPages > 7) {
        if (currentPage <= 5 || currentPage === undefined) {
          this.setPageList([1, 2, 3, 4, 5, 6, 7, "...", numPages]);
        } else {
          pagesArray = [];
          pagesArray.push(1);
          pagesArray.push('...');
          for (var i = parseInt(currentPage) - 2; i <= parseInt(currentPage) + 2; i++) {
            pagesArray.push(i);
          }
          pagesArray.push('....');
          pagesArray.push(numPages);
          this.setPageList(pagesArray);
        }

      } else if (this.state.numPages <= 7) {
        for (var i = 1; i <= numPages; i++) {
          pagesArray.push(i);
        }
        this.setPageList(pagesArray);
      }
    }
  },

	render: function () {
		return (

    		<div className="ui huge inverted pagination menu">
          {this.state.pagesArray.map(function (pageNum) {
            if (pageNum === 1) {
              return (<a className="active item" key={pageNum}>{pageNum}</a>)
            } else if (pageNum === "...") {
              return (<a className="disabled item" key="...">{pageNum}</a>)
            } else if (pageNum === "....") {
              return (<a className="disabled item" key="....">...</a>)
            } else {
            return (<a className="item" key={pageNum}>{pageNum}</a>);
            }
          }.bind(this))}
        </div>
		);
	}
});

module.exports = Pagination;