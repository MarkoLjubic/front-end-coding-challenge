import axios from 'axios';

import apiMiddleware from './apiMiddleware';

jest.mock('axios');

describe('apiMiddleware', () => {
  let next, dispatch, getState, middleware, dispatchCalls, nextCalls;

  beforeEach(() => {
    next = jest.fn();
    dispatch = jest.fn();
    getState = jest.fn();

    dispatchCalls = dispatch.mock.calls;
    nextCalls = next.mock.calls

    middleware = apiMiddleware({ dispatch, getState })(next);
  });

  describe('general', () => {
    it('should call next when action is not API type', () => {
      const action = {
        type: 'SET_OFFICES',
        data: [{ id: 0 }]
      };

      middleware(action);

      expect(dispatchCalls.length).toBe(0);
      expect(nextCalls).toEqual([[action]]);
    });
  });

  describe('success', () => {

    beforeAll(() => {
      axios.mockImplementation(jest.fn(({ method, url, data }) => Promise.resolve({ data: [{ id: 0 }] })))
    });

    it('should dispatch action when api call is success', async () => {
      expect.assertions(3);
      const apiAction = {
        type: 'API',
        payload: {
          method: 'get',
          success: 'SET_DATA',
          url: 'fake.json'
        }
      };

      const setData = {
        type: 'SET_DATA',
        payload: {
          data: [{ id: 0 }]
        }
      };

      await middleware(apiAction);

      expect(nextCalls.length).toBe(0);
      expect(dispatchCalls.length).toBe(1);
      expect(dispatchCalls).toEqual([[setData]]);
    });
  });

  describe('error', () => {

    beforeAll(() => {
      axios.mockImplementation(jest.fn(({ method, url, data }) => Promise.reject('error')))
    });

    it('should catch error when api call is rejected', async () => {
      expect.assertions(2);
      const apiAction = {
        type: 'API',
        payload: {
          method: 'get',
          success: 'SET_DATA',
          url: 'fake.json'
        }
      };

      const setData = {
        type: 'SET_DATA',
        payload: {
          data: [{ id: 0 }]
        }
      };

      await middleware(apiAction);

      expect(nextCalls.length).toBe(0);
      expect(dispatchCalls.length).toBe(0);
    });
  });
});
