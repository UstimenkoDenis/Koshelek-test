import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import SDKContext from './App_Core/plugins/SDK/SDKContext/SDK-context';
import store from './App_Core/plugins/store/Store';
import SDK from './App_Core/plugins/SDK/SDK';

const sdk = new SDK();

ReactDOM.render(
  <Provider store = {store}>
    <SDKContext.Provider value={sdk}>
      <App/>
    </SDKContext.Provider>    
  </Provider>, 
  document.getElementById('root')
);


