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
        type="text"
        placeholder="Search for a product"
        ref="searchQueryInput"
        defaultValue={this.props.query}
        onKeyUp={this.handleKeyUp.bind(this)}
      />
    );
  }

}
