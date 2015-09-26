import React from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList';

export default class AutocompleteProducts extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductList products={this.props.products} />
      </div>
    );
  }
}
