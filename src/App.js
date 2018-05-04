import React, { Component } from "react";
import { Route, Redirect, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Router from './components/Router/Router';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Router />
      </div>
    );
  }
}

export default App;
