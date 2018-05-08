jest.mock('redux', () => ({
  combineReducers(reducers) {
    return reducers;
  }
}));

import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('should create a root reducer', () => {
    expect(typeof rootReducer.offices).toBe('function');
  });
});
