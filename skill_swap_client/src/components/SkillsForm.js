import React, { Component } from 'react';
import { addSkill } from '../actions/skillsActions'
import { connect } from 'react-redux';
import SkillsList from './SkillsList';

class SkillsForm extends Component {
    state = {
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
        this.props.addSkill(this.state)
        this.props.history.push('/skills') 
        
    }



    render() {
        return (
            <form style={{color: 'green'}} onSubmit={this.handleSubmit}> 
                <label>Field</label>
                <input type='text' value={this.state.field} onChange={this.handleChange} name="field"/>
                < br />

                <label>Years Experience</label>
                <input type='text' value={this.state.years_experience} onChange={this.handleChange} name="years_experience"/>
                < br /> 
                <input type='submit' value="Add Skill" /> 
            </form>
        )
    }
}

export default connect(null, { addSkill } )(SkillsForm);