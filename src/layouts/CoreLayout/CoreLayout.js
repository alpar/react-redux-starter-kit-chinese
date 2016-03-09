import React, { PropTypes } from 'react';
// import '../../styles/bootstrap/bootstrap.css';
// import '../../styles/bootstrap/bootstrap-theme.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/core.scss';

export class CoreLayout extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default CoreLayout;
