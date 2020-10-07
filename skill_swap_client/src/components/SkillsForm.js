import React, { Component } from 'react';
import { connect } from 'react-redux'

class SkillsForm extends Component {
    state = { 
        
            user_id: '', 
            field: '', 
            years_experience: ''

        
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
    
    
    render(){
        return (
            <form>
                <label>Field</label>
                <input type='text' value={this.state.field} onChange={(e) => {this.setState({skills_attributes: {...this.state.skills_attributes, field: e.target.value}})}} name='field'/>
                <br/>

                <label>Years Experience</label>
                <input type='text' value={this.state.years_experience} onChange={(e) => {this.setState({skills_attributes: {...this.state.skills_attributes, years_experience: e.target.value}})}} name='years_experience'/>
                <br/>

                <input type='submit' value='Create User' /> 
            </form>
        )
    }
}