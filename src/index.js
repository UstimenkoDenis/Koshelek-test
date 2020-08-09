import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import SDKContext from './App_Core/plugins/SDK/SDKContext/SDK-context';

ReactDOM.render(
  <Provider>
    <SDKContext.Provider>
      <App/>
    </SDKContext.Provider>    
  </Provider>, 
  document.getElementById('root')
);


