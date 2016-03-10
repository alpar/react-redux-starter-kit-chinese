import React, { PropTypes } from 'react';
import '../../styles/core.scss';

import HeaderBar from '../../components/common/HeaderBar';
import HeaderNavi from '../../components/common/HeaderNavi';
import Footer from '../../components/common/Footer';

export class CoreLayout extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <div>
        <HeaderBar/>
        <HeaderNavi/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default CoreLayout;
