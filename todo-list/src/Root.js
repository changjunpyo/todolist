import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';
import './index.css';


const Root = () => {
  return (
      <Provider store={store}>
          <App />
      </Provider>
    
  );
};

export default Root;

