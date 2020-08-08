import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import Landing from './Components/Layout/Landing';
import lazyComponentLoader from './Hocs/LazyLoader';

const AsyncTable = lazyComponentLoader(() => import('./Components/table_page/Table_page'));
const AsyncInput = lazyComponentLoader(() => import('./Components/input_page/Input_page'));

function App() {
  return (
    <Router>
      <div className="App">
        <Landing/> 
        <Switch>
          <Route path='/table' component={AsyncTable}/>
          <Route path='/input' component={AsyncInput}/>
        </Switch>
      </div>
    </Router>    
  );
}

export default App;
