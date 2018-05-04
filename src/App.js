import React, { Component } from "react";
import { Route, Redirect, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import TextView from './views/TextView/TextView';

class App extends Component {
  render() {    
    return (
      <div>
        <Navbar />
        <Switch>
          <Redirect exact from='/' to='/list' />
          <Route path='/:direction' component={TextView}/>
        </Switch>
      </div>
    );
  }
}

export default App;
