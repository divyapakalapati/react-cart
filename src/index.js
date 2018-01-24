import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import Main from './Main';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
  <BrowserRouter>
    <Main store={store}/>
  </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
