import { store } from './src/reducers';
import { Provider } from 'react-redux';
import Main from './src/Main';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;