import React from 'react';

export default class ProductCategoryRow extends React.Component {

  rawName() {
    return {
      __html: this.props.product._highlightResult.name.value,
    };
  }

  handleClick() {
    this.props.onSelect(this.props.product);
  }

  render() {
    return (
      <div className="product" onClick={this.handleClick.bind(this)}>
        <img src={this.props.product.image} alt="Product Image" />
        <span dangerouslySetInnerHTML={this.rawName()} />
      </div>
    );
  }

}
