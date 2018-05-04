import React, { Component } from "react";
import { connect } from 'react-redux';

import Navbar from './components/Navbar/Navbar';
import Router from './components/Router/Router';
import { getOffices } from './actions/offices';

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
