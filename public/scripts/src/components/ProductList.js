import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';

export default class ProductList extends React.Component {
  render() {
    const categories = [];
    const products = {};
    this.props.products.forEach((product) => {
      if (!products[product.category]) {
        categories.push(product.category);
        products[product.category] = [product];
      } else {
        products[product.category].push(product);
      }
    });
    const rows = categories.map((category) => {
      return (
        <ProductCategoryRow
          selected={this.props.selected}
          category={category}
          products={products[category]}
          onSelect={this.props.onSelect}
        />
      );
    });
    return <div className="products">{rows}</div>;
  }
}

ProductList.propTypes = {
  products: React.PropTypes.array,
  onSelect: React.PropTypes.func,
  selected: React.PropTypes.object,
};

export default ProductList;
