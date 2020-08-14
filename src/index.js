import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import ErrorBoundry from './Components/error-boundry';
import SDKContext from './App_Core/plugins/SDK/SDKContext/SDK-context';
import store from './App_Core/plugins/store/Store';
import SDK from './App_Core/plugins/SDK/SDK';


const sdk = new SDK();

ReactDOM.render(
  <Provider store = {store}>
    <ErrorBoundry>
      <SDKContext.Provider value={sdk}>

        <App/>
      </SDKContext.Provider>    
    </ErrorBoundry>    
  </Provider>, 
  document.getElementById('root')
);


