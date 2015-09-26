import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
  render() {
    return (
      <div className="product-table">
        <div>Product table</div>
        <ProductCategoryRow />
        <ProductRow />
      </div>
    );
  }
}
