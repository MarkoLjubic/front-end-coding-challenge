import React, { Component } from "react";

import Navbar from "./components/Navbar/Navbar";
import Offices from "./containers/Offices/Offices";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Offices />
      </div>
    );
  }
}

export default App;
