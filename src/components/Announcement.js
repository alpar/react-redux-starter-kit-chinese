import React, { PropTypes } from 'react';

export default class Announcement extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="announcement">
            Announcement 组件
          </div>
        </div>
      </div>
    );
  }
}
