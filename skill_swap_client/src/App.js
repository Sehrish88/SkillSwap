import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard'; 
import TimeOfDay from './components/TimeOfDay';
import UsersContainer from './components/UsersContainer' 
import { connect } from 'react-redux'
import { fetchUsers } from './actions/usersActions'
//import {MdSwapCalls} from 'react-icons/md';

function App(props) {
    return (
      <div className="App">
       <TimeOfDay />
    
         
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/users" component={UsersContainer} />
            <Route exact path="/about" component={About} />

          </Switch>
        </Router> 
        
         </div>
       

         
    
    );
  }
  
  export default connect(null, { fetchUsers})(App); 