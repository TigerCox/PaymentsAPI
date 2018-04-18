import React from 'react';
import {Route} from 'react-router';

import MainLayout from './components/layouts/MainLayout';
import Payments from './components/pages/Payments';

export default (
  <Route component={MainLayout}>
    <Route path='/' component={Payments} />
    <Route path='*' component={Payments} />
  </Route>
);
