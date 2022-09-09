import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configure';
import Maindetails from '../maindetails';

describe('Test of Profile Components', () => {
  it('Profile Components Renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
        <Provider store={store}>
          <Maindetails />
        </Provider>
        </BrowserRouter>,
      );
    expect(tree).toMatchSnapshot();
  });
});