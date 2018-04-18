import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import {Router, Route, browserHistory} from 'react-router';
import configureStore from './store/configureStore';

import MainLayout from './components/layouts/MainLayout';
import Payments from './components/pages/Payments';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory} route={routes}>
      <Route component={MainLayout}>
        <Route path='/' component={Payments} />
        <Route path='*' component={Payments} />
      </Route>
    </Router>
  </Provider>, document.getElementById('app')
);
