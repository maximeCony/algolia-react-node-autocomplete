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
    };
  }

  handleUserInput(query) {
    index
      .search(query)
      .then((res) => {
        this.setState({
          query,
          products: res.hits,
        });
      })
      .catch((err) => console.error(err));
  }

  handleSelect(product) {
    this.setState({
      query: product.name,
      products: [],
    });
  }

  render() {
    return (
      <div className="autocomplete">
        <SearchBar
          query={this.state.query}
          onUserInput={this.handleUserInput.bind(this)}
        />
        <ProductList
          products={this.state.products}
          onSelect={this.handleSelect.bind(this)}
        />
      </div>
    );
  }
}
