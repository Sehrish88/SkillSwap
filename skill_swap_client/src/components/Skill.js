import React from 'react'
import UpvoteButton from './UpvoteButton'
import ToggleButton from './ToggleButton'

const Skill = (props) =>{
    return <ul><li key={props.skill.id} style= {{border: '3px solid green', backgroundColor: 'skyblue', borderRadius: '25px'}}><h4>Field: {props.skill.field}</h4>  <b>Years Experience: </b>{props.skill.years_experience}  <UpvoteButton /> <ToggleButton /> </li></ul>
}

export default Skill