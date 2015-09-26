import React from 'react';
import ProductRow from './ProductRow';

export default class ProductCategoryRow extends React.Component {
  render() {
    const rows = this.props.products
      .map((product) => <ProductRow product={product} />);
    return (
      <div className="category">
        <div>{this.props.category}</div>
        <ul>{rows}</ul>
      </div>
    );
  }
}
