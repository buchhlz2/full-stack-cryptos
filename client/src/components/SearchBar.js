import React, { Component } from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSearchText = this.handleSearchText.bind(this);
  }
  // when the input changes (as typing occurs) with handleSearchText, pass it back to App.js to set state
  handleSearchText(e) {
    this.props.onSearchTextChange(e.target.value);
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="searchBar">Search</label>
          <input
            type="text"
            className="form-control"
            id="searchBar"
            placeholder="Search..."
            value={this.props.searchText}
            onChange={this.handleSearchText}
          />
          <small id="searchHelp" className="form-text text-muted">Search by name or ticker symbol.</small>
        </div>
      </form>
    );
  }
}
