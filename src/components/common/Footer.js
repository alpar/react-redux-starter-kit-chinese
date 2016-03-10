import React, { PropTypes } from 'react';

export default class Footer extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div className="footer">PageFooter</div>
    );
  }
}
