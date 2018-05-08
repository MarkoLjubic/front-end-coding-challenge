import { SET_OFFICES } from '../actions/actionTypes';
import offices from './offices';

describe('offices reducer', () => {

  it('should return initial state', () => {
    expect(offices(undefined, {})).toEqual([]);
  });

  it('should handle SET_OFFICES correctly', () => {
    const office = {
      "id": 1,
      "name": "Belgrade Office",
      "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
       Donec in est sed neque ullamcorper bibendum venenatis ut sapien.',
      "latitude": "44.786568",
      "longitude": "20.4489216",
      "photo": 'https://cdn.pixabay.com/photo/2017/08/15/03/22/wheat-2642654_960_720.jpg'
    };
    const action = {
      type: SET_OFFICES,
      payload: {
        data: [
          office
        ]
      }
    }

    expect(offices(undefined, action)).toEqual([office]);
  });
});
