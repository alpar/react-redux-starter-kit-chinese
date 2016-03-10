import React, { PropTypes } from 'react';

export default class ProductFilter extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div className="filter">
        ProductFilter
      </div>
    );
  }
}
