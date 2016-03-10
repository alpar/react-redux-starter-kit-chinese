import React, { PropTypes } from 'react';

export default class DebitView extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div className="container">
        <h1>DebitView</h1>
      </div>
    );
  }
}
