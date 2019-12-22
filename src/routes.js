import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from 'core/utils/history';
import Main from 'pages/Main';
import Customers from 'pages/Customers';
import NotFound from 'pages/NotFound';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/customers" component={Customers} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
