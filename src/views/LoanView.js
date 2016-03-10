import React, { PropTypes } from 'react';

export default class LoanView extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div className="container">
        <h1>LoanView</h1>
      </div>
    );
  }
}
