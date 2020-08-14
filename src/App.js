import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Whoops404 from './Components/whoops404/whoops404';
import Header from './Components/header/Header';
import lazyComponentLoader from './Hocs/LazyLoader';
import App_Core from './App_Core/App_Core';

const AsyncTable = lazyComponentLoader(() => import('./Components/pages/table_page/Table_page'));
const AsyncInput = lazyComponentLoader(() => import('./Components/pages/input_page/Input_page'));

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>        
        <div className="App__content">
          <Switch>
            <Route path='/' exact component={null}/> 
            <Route path='/table' component={AsyncTable}/>
            <Route path='/input' component={AsyncInput}/>
            <Route component={Whoops404}/>
          </Switch>         
        </div>                      
      </div>
    </Router>    
  );
}

export default App;
