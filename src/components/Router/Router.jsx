import React from "react";
import { Route, Redirect, Switch } from 'react-router-dom';

import TextView from '../../views/TextView/TextView';
import MapView from '../../views/MapView/MapView';

function Router() {
  return (
    <Switch>
      <Redirect exact from='/' to='/list' />
      <Route path='/map' component={MapView}/>
      <Route path='/:direction' component={TextView}/>
    </Switch>
  );
}

export default Router;
