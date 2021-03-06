import React from 'react';

export default class ProductCategoryRow extends React.Component {

  rawName() {
    return {
      __html: this.props.product._highlightResult.name.value,
    };
  }

  handleClick() {
    // onMouseDown is used instead of onClick because it fire before onBlur
    this.props.onSelect(this.props.product);
  }

  render() {
    let classes = 'product';
    if (this.props.selected.current++ === this.props.selected.idx) {
      // reference used by AutocompleteProducts.handlePressEnter
      this.props.selected.product = this.props.product;
      classes += ' selected';
    }
    return (
      <div className={classes} onMouseDown={this.handleClick.bind(this)}>
        <img src={this.props.product.image} alt="Product Image" />
        <span dangerouslySetInnerHTML={this.rawName()} />
      </div>
    );
  }

}

ProductCategoryRow.propTypes = {
  product: React.PropTypes.object,
  onSelect: React.PropTypes.func,
  selected: React.PropTypes.object,
};
