import * as actions from './offices';

describe('offices actions', () => {

  it('should generate the action correctly', () => {
    const action = {
      type: 'API',
      payload: {
        url: 'https://itk-exam-api.herokuapp.com/api/offices',
        method: 'get',
        success: 'SET_OFFICES'
      }
    };

    expect(actions.getOffices()).toEqual(action);
  });
});
