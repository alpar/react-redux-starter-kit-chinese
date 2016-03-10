import React, { PropTypes } from 'react';
import NewsList from './NewsList';

export default class NewsListGroup extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div style={{backgroundColor: '#fff', paddingTop: 20, paddingBottom: 30}}>
        <div className="container container-no-padding">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <NewsList/>
            </div>
            <div className="col-sm-12 col-lg-8">
              <NewsList/>
            </div>
            <div className="col-sm-12 col-lg-8">
              <NewsList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
