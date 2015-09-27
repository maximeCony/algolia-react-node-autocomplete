import React from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';
const ALGOLIA_APP_ID = window.APP_GLOBALS.ALGOLIA_APP_ID;
const ALGOLIA_SEARCH_ONLY_KEY = window.APP_GLOBALS.ALGOLIA_SEARCH_ONLY_KEY;
import algoliasearch from 'algoliasearch';
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_SEARCH_ONLY_KEY);
const index = client.initIndex('app_store');

export default class AutocompleteProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      products: [],
      selected: {
        current: 0,
        idx: 0,
      },
    };
  }

  handleUserInput(query) {
    index
      .search(query)
      .then((res) => {
        this.setState({
          query,
          products: res.hits,
          selected: {
            current: 0,
            idx: 0,
          },
        });
      })
      .catch((err) => console.error(err));
  }

  handleSelect(product) {
    this.setState({
      query: product.name,
      products: [],
      selected: {
        current: 0,
        idx: 0,
      },
    });
  }

  handleMoveSelection(direction) {
    let nextIdx = this.state.selected.idx + (direction === 'up' ? -1 : 1);
    if (nextIdx < 0 || nextIdx >= this.state.products.length) {
      nextIdx = this.state.selected.idx;
    }
    this.setState({
      selected: {
        current: 0,
        idx: nextIdx,
      },
    });
  }

  handlePressEnter() {
    if (this.state.selected.product) {
      this.handleSelect(this.state.selected.product);
    }
  }

  render() {
    return (
      <div className="autocomplete">
        <SearchBar
          query={this.state.query}
          onUserInput={this.handleUserInput.bind(this)}
          onMoveSelection={this.handleMoveSelection.bind(this)}
          onPressEnter={this.handlePressEnter.bind(this)}
        />
        <ProductList
          products={this.state.products}
          selected={this.state.selected}
          onSelect={this.handleSelect.bind(this)}
        />
      </div>
    );
  }
}
