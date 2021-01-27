import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const App = React.lazy(() => import('./App'));

const store = createStore(allReducers, composeWithDevTools());

render(
  <React.Suspense fallback={<p>Loading...</p>}>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Suspense>,
  document.getElementById('root')
);
