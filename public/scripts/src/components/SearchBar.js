import React from 'react';
const keyCodeUp = 38;
const keyCodeDown = 40;
const keyCodeEnter = 13;

export default class SearchBar extends React.Component {

  handleChange() {
    this.props.onUserInput(this.refs.searchQueryInput.getDOMNode().value);
  }

  handleKeyDown(event) {
    switch (event.keyCode) {
    case keyCodeUp:
      return this.props.onMoveSelection('up');
    case keyCodeDown:
      return this.props.onMoveSelection('down');
    case keyCodeEnter:
      return this.props.onPressEnter();
    default:
      // http://eslint.org/docs/rules/default-case.html
    }
  }

  handleFocus() {
    this.props.onUserInput(this.refs.searchQueryInput.getDOMNode().value);
  }

  render() {
    return (
      <input
        className="search-input js-searchInput"
        type="text"
        placeholder="Search for an App"
        ref="searchQueryInput"
        defaultValue={this.props.query}
        onChange={this.handleChange.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)}
        onFocus={this.handleFocus.bind(this)}
      />
    );
  }

}

SearchBar.propTypes = {
  onUserInput: React.PropTypes.func,
  onMoveSelection: React.PropTypes.func,
  onPressEnter: React.PropTypes.func,
  onSearchBlur: React.PropTypes.func,
  query: React.PropTypes.string,
};
