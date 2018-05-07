import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router'

import Navbar from './components/Navbar/Navbar';
import Router from './components/Router/Router';
import { getOffices } from './actions/offices';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getOffices());
  }

  render() {
    return (
      <div>
        <Navbar />
        <Router />
      </div>
    );
  }
}

export default withRouter(connect()(App));
