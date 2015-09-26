import React from 'react';

export default class ProductCategoryRow extends React.Component {
  render() {
    return (
      <li>
        <img src={this.props.product.image} alt="Product Image" />
        <span>{this.props.product.name}</span>
      </li>
    );
  }
}
