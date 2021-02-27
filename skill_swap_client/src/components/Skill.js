import React from 'react'
import Liker from './Liker'


const Skill = (props) =>{
    return <ul><li key={props.skill.id} style= {{border: '3px solid green', backgroundColor: 'skyblue', borderRadius: '25px'}}><h4>Field: {props.skill.field}</h4>  <b>Years Experience: </b>{props.skill.years_experience} {<Liker />}  </li></ul>
}

export default Skill