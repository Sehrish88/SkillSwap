import React, { Component } from 'react';
import { connect } from 'react-redux' 

class LoginForm extends Component {

    state = { 
       
        email: '',
        password: ''

       
       

    } 

    handleChange = e => {
        const { name, value } = e.target
       
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUser(this.state)
    }

   render ()  {return (
       
        <div>
            <h1 style={{color: 'green', textAlign: 'center'}}>Log In </h1>
            <form style={{color: 'green'}}>
                
                <label>Email</label>
                <input type='text' value={this.state.email} onChange={this.handleChange} name='email'/>
                <br/>

                <label>Password</label>
                <input type='text' value={this.state.password} onChange={this.handleChange} name='password'/>
                <br/>

                <input type='submit' value='Login User' /> 
            </form>

        </div> 

           
          
   

    )} 
    
   }


    export default LoginForm; 