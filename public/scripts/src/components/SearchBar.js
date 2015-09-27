import React from 'react';
const keyCodeUp = 38;
const keyCodeDown = 40;
const keyCodeEnter = 13;

export default class SearchBar extends React.Component {

  handleChange() {
    this.props.onUserInput(
      this.refs.searchQueryInput.getDOMNode().value
    );
  }

  handleKeyDown(event) {
    switch (event.keyCode) {
      case keyCodeUp:
      return this.props.onMoveSelection('up');
      case keyCodeDown:
      return this.props.onMoveSelection('down');
      case keyCodeEnter:
      return this.props.onPressEnter();
    }
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
        onKeyDown={this.handleKeyDown.bind(this)}
      />
    );
  }

}
