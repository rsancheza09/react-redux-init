import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  // Link
} from 'react-router-dom';

import Map from './components/Map';

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/:id" component={Map} />
        <Redirect from="/" to="/no-id" />
      </Switch>
    </div>
  </Router>
);

export default Routes;
