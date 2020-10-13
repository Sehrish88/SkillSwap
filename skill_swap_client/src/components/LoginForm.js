import React, { Component } from 'react';
import { login } from '../actions/authActions'
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
        this.props.login(this.state, this.props.history.push(`/dashboard`));
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


    export default connect(null, { login })(LoginForm); 