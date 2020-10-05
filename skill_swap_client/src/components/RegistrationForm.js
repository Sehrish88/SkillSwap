import React, { Component } from 'react';
import { connect } from 'react-redux'


class RegistrationForm extends Component {

    state = { 
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        years_experience: '', 
        field: ''

    } 

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

//     handleSubmit = e => {
//         e.preventDefault()
//         this.props.addGrad(this.state)
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>Name</label>
//                 <input type='text' value={this.state.name} onChange={this.handleChange} name='name'/>
//                 <br/>

//                 <label>Emai</label>
//                 <input type='text' value={this.state.email} onChange={this.handleChange} name='degree'/>
//                 <br/>

//                 <label>Password</label>
//                 <input type='text' value={this.state.password} onChange={this.handleChange} name='grad_date'/>
//                 <br/>

//                 <label>Password Confirmation</label>
//                 <input type='text' value={this.state.password_confirmation} onChange={this.handleChange} name='school'/>
//                 <br/>

//                 <input type='submit' value='Create User' /> 


//             </form>
//         );
//     }
// }

export default RegistrationForm

