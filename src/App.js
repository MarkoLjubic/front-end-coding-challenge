import React from "react";

import Navbar from './components/Navbar/Navbar';
import Offices from './containers/Offices/Offices';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Offices />
    </div>
  );
}

export default App;
