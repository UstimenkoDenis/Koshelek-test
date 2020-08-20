import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Whoops404 from './Components/whoops404/whoops404';
import Header from './Components/header/Header';
import lazyComponentLoader from './Hocs/LazyLoader';

const AsyncTable = lazyComponentLoader(() => import('./Components/pages/table_page/Table_page'));
const AsyncLastUpdates = lazyComponentLoader(() => import('./Components/pages/lastUpdates_page/LastUpdates_page'));

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header/>        
        <div className="app-content">
          <Switch>
            <Route path='/' exact component={null}/> 
            <Route path='/table' component={AsyncTable}/>
            <Route path='/lastupdates' component={AsyncLastUpdates}/>
            <Route component={Whoops404}/>
          </Switch>         
        </div>                      
      </div>
    </Router>    
  );
}

export default App;
