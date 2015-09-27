import React from 'react';

export default class SearchBar extends React.Component {

  handleKeyUp() {
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
        defaultValue={this.props.query}
        onKeyUp={this.handleKeyUp.bind(this)}
      />
    );
  }

}
