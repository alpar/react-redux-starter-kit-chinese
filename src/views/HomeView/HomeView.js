/* @flow */
import React from 'react';

export class HomeView extends React.Component {
  render() {
    return (
      <div>
        <h1>New Project</h1>
        <div className="btn-group">
          <a className="btn btn-default">hello world</a>
          <a href="#" className="btn btn-primary">链接按钮</a>
          <a href="#" className="btn btn-warning">链接按钮</a>
          <a href="#" className="btn btn-danger">链接按钮</a>
          <a href="#" className="btn btn-info">链接按钮</a>
          <a href="#" className="btn btn-red">链接按钮</a>
          <a href="#" className="btn btn-primary btn-black">链接按钮</a>
        </div>
      </div>
    );
  }
}

export default HomeView;
