import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUser } from '../actions/usersActions' 
import {register} from '../actions/authActions'
import NavBar from './NavBar'
import Header from './Header';

class RegistrationForm extends Component {

    componentDidUpdate(prevProps){
        if (prevProps.posting) {
            this.props.history.push(`/users`)
        }
    } 

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
        
    }

    render() {
        return (
           

            
            <form  style={{color: 'green'}} onSubmit={this.handleSubmit} >
                <Header />
                <NavBar />
                
                <label>Name: </label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
                <br/><br/>

                <label>Email: </label>
                <input type='text' value={this.state.email} onChange={this.handleChange} name='email'/>
                <br/><br/>

                <label>Password: </label>
                <input type='password' value={this.state.password} onChange={this.handleChange} name='password'/>
                <br/><br/>

                <label>Password Confirmation: </label>
                <input type='password' value={this.state.password_confirmation} onChange={this.handleChange} name='password_confirmation'/>
                <br/><br/>

                <label>Field: </label>
                <input type='text' value={this.state.field} onChange={(e) => {this.setState({skills_attributes: {...this.state.skills_attributes, field: e.target.value}})}} name='field'/>
                <br/><br/>

                <label>Years Experience: </label>
                <input type='text' value={this.state.years_experience} onChange={(e) => {this.setState({skills_attributes: {...this.state.skills_attributes, years_experience: e.target.value}})}} name='years_experience'/>
                <br/><br/>

                <input type='submit' value='Add your Information' /> 


            </form>
        );
    }
}

const mapStateToProps = state => {
    return{
        posting: state.users.posting
    }
}

 
export default connect(mapStateToProps, { addUser})(RegistrationForm); 

