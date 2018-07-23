import React from "react";
import { shallow } from 'enzyme';

import Navbar from './components/Navbar/Navbar';
import Offices from './containers/Offices/Offices';
import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(Navbar)).toHaveLength(1);
    expect(wrapper.find(Offices)).toHaveLength(1);
  });
})
