import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'layouts/CoreLayout/CoreLayout';
import HomeView from 'views/HomeView';
import DebitView from 'views/DebitView';
import LoanView from 'views/LoanView';

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='/loan' component={LoanView}/>
    <Route path='/debit' component={DebitView}/>
    <Route path='/loan' component={LoanView}/>
    <Route path='/news' component={LoanView}/>
    <Route path='/help' component={LoanView}/>
    <Route path='/aboutus' component={LoanView}/>
    <Route path='/user' component={LoanView}/>

  </Route>
);
