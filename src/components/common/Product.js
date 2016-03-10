import React, { PropTypes } from 'react';

export default class Product extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div className="col-md-12 col-lg-8">
        <div className="product">Product 公用</div>
      </div>
    );
  }
}
