import React, { PropTypes } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export default class FeautureAndData extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div>
        <div className="container" style={{ height: 140 }}>
          <Grid>
            <Row>
              <Col md={16}>
                PlatformFeauture 组件
              </Col>
              <Col md={8}>
                DataReport 组件
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
