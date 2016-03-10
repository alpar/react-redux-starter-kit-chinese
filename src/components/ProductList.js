import React, { PropTypes } from 'react';
import ProductFilter from './ProductFilter';
import Product from './common/Product';

export default class ProductList extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div className="container container-no-padding product-list">
        <ProductFilter/>
        <div className="row">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </div>
      </div>
    );
  }
}
