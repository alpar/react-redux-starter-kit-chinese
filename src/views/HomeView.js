/* @flow */
import React from 'react';
import Banner from '../components/common/banner/Banner';
import ProductList from '../components/ProductList';
import NewsListGroup from '../components/NewsListGroup';
import Announcement from '../components/Announcement';
import FeautureAndData from '../components/FeautureAndData';

//class Space extends React.Component {
//  render() {
//    return (
//      <div style={{ height: 10 }}></div>
//    );
//  }
//}

export class HomeView extends React.Component {
  render() {
    return (
      <div>
        <Banner/>
        <FeautureAndData/>
        <Announcement/>
        <ProductList/>
        <NewsListGroup/>
      </div>
    );
  }
}

export default HomeView;
