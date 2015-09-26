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
      return <ProductCategoryRow category={category} products={products[category]}/>;
    });
    return <div>{rows}</div>;
  }
}
