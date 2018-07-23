import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import TextView from '../../views/TextView/TextView';
import MapView from '../../views/MapView/MapView';
import Loader from '../../components/Loader/Loader';
import Offices from './Offices';
import { linkShema } from '../../utils/config';

describe('Offices', () => {
  const offices = [
    {
      "id": 1,
      "name": "Belgrade Office",
      "description": "Itekako Belgrade office address is Terazije 2",
      "latitude": "44.786568",
      "longitude": "20.4489216",
      "photo": "http://www.geonames.org/flags/x/rs.gif"
    },
    {
      "id": 2,
      "name": "Paris Office",
      "description": "Itekako Paris office address is Main street",
      "latitude": "48.856614",
      "longitude": "2.3522219",
      "photo": null
    }
  ];

  const store = mockStore({
    offices
  });

  let actions;

  beforeEach(() => {
    actions = {
      getOffices: jest.fn()
    };
  });

  it('should render loader when offices field is empty', () => {
    const wrapper = shallow(
      <Offices.WrappedComponent
        actions={actions}
        offices={[]}
      />
    );

    expect(wrapper.find(Loader)).toHaveLength(1);

    expect(wrapper.find(TextView)).toHaveLength(0);
    expect(wrapper.find(MapView)).toHaveLength(0);
  });

  it('should call getOffices on mount', () => {
    const wrapper = shallow(
      <Offices.WrappedComponent
        actions={actions}
        offices={[]}
      />
    );

    expect(actions.getOffices).toHaveBeenCalled();
  });

  it('should render TextView, List direction by default when offices are given', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <Offices />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(TextView)).toHaveLength(1);
    expect(wrapper.find(TextView).prop('direction')).toBe('list');
    expect(wrapper.find(TextView).prop('offices')).toEqual(offices);

    expect(wrapper.find(Loader)).toHaveLength(0);
    expect(wrapper.find(MapView)).toHaveLength(0);
  });

  it('should handle list path', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ linkShema.List.path ]}>
          <Offices />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(TextView)).toHaveLength(1);
    expect(wrapper.find(TextView).prop('direction')).toBe('list');
    expect(wrapper.find(TextView).prop('offices')).toEqual(offices);

    expect(wrapper.find(Loader)).toHaveLength(0);
    expect(wrapper.find(MapView)).toHaveLength(0);
  });

  it('should handle grid path', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ linkShema.Grid.path ]}>
          <Offices />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(TextView)).toHaveLength(1);
    expect(wrapper.find(TextView).prop('direction')).toBe('grid');
    expect(wrapper.find(TextView).prop('offices')).toEqual(offices);

    expect(wrapper.find(Loader)).toHaveLength(0);
    expect(wrapper.find(MapView)).toHaveLength(0);
  });

  it('should handle map path', () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={[ linkShema.Map.path ]}>
          <Offices />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper.find(MapView)).toHaveLength(1);
    expect(wrapper.find(MapView).prop('offices')).toEqual(offices);

    expect(wrapper.find(Loader)).toHaveLength(0);
    expect(wrapper.find(TextView)).toHaveLength(0);
  });
});
