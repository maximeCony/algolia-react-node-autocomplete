import React from 'react';
import ProductRow from './ProductRow';

export default class ProductCategoryRow extends React.Component {

  rawCategory() {
    return {
      __html: this.props.products[0]._highlightResult.category.value,
    };
  }

  render() {
    const rows = this.props.products
      .map((product) => <ProductRow product={product} onSelect={this.props.onSelect} />);
    return (
      <div className="category">
        <h4 dangerouslySetInnerHTML={this.rawCategory()} />
        <div className="products-by-category">{rows}</div>
      </div>
    );
  }
}
