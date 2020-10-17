import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard'; 
import TimeOfDay from './components/TimeOfDay';
import UsersContainer from './components/UsersContainer' 
import { connect } from 'react-redux'
import { fetchUsers } from './actions/usersActions'
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import NavBar from './components/NavBar'
import skillsShowPage from './components/skillsShowPage'
import SkillsList from './components/SkillsList';
import SkillsForm from './components/SkillsForm' 


//import {MdSwapCalls} from 'react-icons/md';

class App extends Component  {
    
 
  render () {
    return (
      <div className="App">
      <TimeOfDay />
   
        
       <Router>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route  path="/dashboard" component={Dashboard} />
           <Route  path="/users" component={UsersContainer} />
           <Route  path="/about" component={About} />
           <Route  path="/login" component={LoginForm} />
           <Route  path="/register" component={RegistrationForm} /> 
           <Route  path="/addSkill" component={SkillsForm} /> 
           <Route exact path="/skills" component={SkillsList} />
           <Route exact path="/skills/{:id}" component={skillsShowPage} />


         </Switch>
        
       </Router> 
    
        </div>
      

    ) 

     

         
    
    

  }
    
  }
  
  export default connect(null, { fetchUsers})(App); 