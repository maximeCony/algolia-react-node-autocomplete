import React from 'react';

export default class ProductCategoryRow extends React.Component {

  rawName() {
    return {
      __html: this.props.product._highlightResult.name.value,
    };
  }

  render() {
    return (
      <div className="product">
        <img src={this.props.product.image} alt="Product Image" />
        <span dangerouslySetInnerHTML={this.rawName()} />
      </div>
    );
  }

}
