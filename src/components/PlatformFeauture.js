import React, { PropTypes } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export default class PlatformFeauture extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div className="platform-feauture">
        PlatformFeauture 组件
      </div>
    );
  }
}
