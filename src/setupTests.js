import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.mockStore =  state => (() => {
  const listeners = [];

  return {
    getState() {
      return state;
    },
    dispatch(action) {
      return action;
    },
    subscribe(cb) {
      if (typeof cb === 'function') {
        listeners.push(cb)
      }

      return () => {
        const index = listeners.indexOf(cb);

        if (index < 0) {
          return
        }
        listeners.splice(index, 1)
      }
    }
  };
})();
