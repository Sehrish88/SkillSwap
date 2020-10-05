import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard'; 
import TimeOfDay from './components/TimeOfDay';
//import {MdSwapCalls} from 'react-icons/md';

function App() {
    return (
      <div className="App">
         
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
        <TimeOfDay />
        <div>
         
        </div>
      </div>
    );
  }
  
  export default App; 