import React from 'react';

export default class SearchBar extends React.Component {

  handleChange() {
    this.props.onUserInput(
      this.refs.searchQueryInput.getDOMNode().value
    );
  }

  render() {
    return (
      <input
        className="searchInput"
        type="text"
        placeholder="Search for an App"
        ref="searchQueryInput"
        value={this.props.query}
        onChange={this.handleChange.bind(this)}
      />
    );
  }

}
