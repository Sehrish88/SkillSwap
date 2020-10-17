import React from 'react'

const Skill = (props) =>{
    return <ul><li key={props.skill.id} style= {{border: '3px solid green'}}><h4>Field: {props.skill.field}</h4>  <b>Years Experience: </b>{props.skill.years_experience}    </li></ul>
}

export default Skill