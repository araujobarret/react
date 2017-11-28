const React = require('react');

let TodoSearch = React.createClass({
  handleSearch: function () {
    let showcompleted = this.refs.showCompleted.checked;
    let searchText = this.refs.searchText.value;

    this.props.onSearch(showcompleted, searchText);
  },
  render: function () {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
            Show completed  todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
