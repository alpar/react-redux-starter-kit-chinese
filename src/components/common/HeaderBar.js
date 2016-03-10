import React, { PropTypes } from 'react';

export class HeaderBar extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div className="header-bar hidden-xs">
        <div className="container container-no-padding">
          <div className="row">
            <div className="col-sm-12">
              <a className="btn btn-link" href="#">客服电话</a>
              <a className="btn btn-link" href="#">移动客户端</a>
              <a className="btn btn-link" href="#">用户体验计划</a>
            </div>
            <div className="col-sm-12 text-right">
              <a className="btn btn-link">当前用户</a>
              <a className="btn btn-link">新手指引</a>
              <a className="btn btn-link">公司动态</a>
              <a className="btn btn-primary">理财论坛</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBar;
