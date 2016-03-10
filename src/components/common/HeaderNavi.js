import React, { PropTypes } from 'react';
import {Link} from 'react-router';

export class HeaderNavi extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <div className="header-navi">
        <div className="container">
          HeaderNavi 组件 公用
          <nav className="wjs-lg-nav">
            <ul className="nav navbar-nav collapse navbar-collapse active pull-left">
              <li className="pull-right">
                <Link to="/user/">我的帐户</Link>
              </li>
              <li><Link to="/">首页</Link></li>
              <li><Link to="/debit/">我要投资</Link></li>
              <li><Link to="/loan/">我要借款</Link></li>
              <li><Link to="/news/">最新动态</Link></li>
              <li><Link to="/help/">帮助中心</Link></li>
              <li><Link to="/aboutus/">关于我们</Link></li>
            </ul>
            <div className="wjs-logo"><a href="/"><p className="icon-logoLeft"></p>

              <p className="icon-logoRight"></p></a></div>
          </nav>
        </div>
      </div>
    );
  }
}

export default HeaderNavi;
