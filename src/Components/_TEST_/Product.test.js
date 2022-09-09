import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Item from '../Item';
import store from '../../redux/configure';

describe('Test of Profile Components', () => {
  test('Item Components Renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Item />
          </Provider>
        </BrowserRouter>,
      );
    expect(tree).toMatchSnapshot();
  });
});
