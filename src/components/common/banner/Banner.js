import React, { PropTypes } from 'react';

export class Banner extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div className="banner">Banner组件</div>
    );
  }
}

export default Banner;
