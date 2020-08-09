import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navigation from './Components/navigation/Navigation.jsx';

import lazyComponentLoader from './Hocs/LazyLoader';
import App_Core from './App_Core/App_Core';

const AsyncTable = lazyComponentLoader(() => import('./Components/pages/table_page/Table_page'));
const AsyncInput = lazyComponentLoader(() => import('./Components/pages/input_page/Input_page'));

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App__header">
          <div className="App__title">
            <div className="App__image">
              <img src="https://hhcdn.ru/employer-logo/2880273.png"/>
            </div>              
          </div>  
          <Navigation/>                       
        </div>
        <div className="App__content">
          <Switch>
            <Route path='/table' component={AsyncTable}/>
            <Route path='/input' component={AsyncInput}/>
          </Switch>
        </div>        
      </div>
    </Router>    
  );
}

export default App;
