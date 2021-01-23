import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchSkills } from '../actions/skillsActions'
import Header from './Header'
import Skill from './Skill'
import HomeLink from './HomeLink'
import UpvoteButton from './UpvoteButton'

class  SkillsList extends Component {
 
    componentDidMount() {
        this.props.fetchSkills()
        }

  
    render() {
        return(
            <div>
                 <Header /> 
                 <HomeLink />
                {this.props.skills.map(skill => <Skill skill={skill}/>)}
               
         
            </div>
        )
    }
    
} 





export default connect(state => ({ skills: state.skills}), { fetchSkills })(SkillsList); 
