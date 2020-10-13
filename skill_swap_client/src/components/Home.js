import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import TimeOfDay from './TimeOfDay'
import NavBar from './NavBar'
import Header from './Header'




class Home extends Component {
    render() {return (
        <div>
       


        <Header /> 
       
        <NavBar />
        </div>

    )

    }
 
    
 
     

}

export default Home; 


