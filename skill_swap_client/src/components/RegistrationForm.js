import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser } from '../actions/usersActions' 
import {register} from '../actions/authActions'

class RegistrationForm extends Component {

    state = { 
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
       
        skills_attributes: {
            field: '', 
            years_experience: ''

        }

       
       

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
        this.props.history.push(`/dashboard`)
    }

    render() {
        return (

            
            <form  style={{color: 'green'}} onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
                <br/>

                <label>Email</label>
                <input type='text' value={this.state.email} onChange={this.handleChange} name='email'/>
                <br/>

                <label>Password</label>
                <input type='text' value={this.state.password} onChange={this.handleChange} name='password'/>
                <br/>

                <label>Password Confirmation</label>
                <input type='text' value={this.state.password_confirmation} onChange={this.handleChange} name='password_confirmation'/>
                <br/>

                <label>Field</label>
                <input type='text' value={this.state.field} onChange={(e) => {this.setState({skills_attributes: {...this.state.skills_attributes, field: e.target.value}})}} name='field'/>
                <br/>

                <label>Years Experience</label>
                <input type='text' value={this.state.years_experience} onChange={(e) => {this.setState({skills_attributes: {...this.state.skills_attributes, years_experience: e.target.value}})}} name='years_experience'/>
                <br/>

                <input type='submit' value='Add your Information' /> 


            </form>
        );
    }
}

export default connect(null, {addUser, register})(RegistrationForm);  

