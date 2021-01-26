import React from 'react';
import { connect } from 'react-redux';
import HomeLink from './HomeLink'


const UsersList = ({users}) => {
    
    return(
        <div>
           <HomeLink />
            {users.map(user => <ul><li key={user.id} style= {{border: '3px solid green', backgroundColor: 'skyblue'}}><h3>{user.name}</h3>  <b>Email: </b>{user.email} <br/>  <b>Field-</b> {user.skills[0].field} <br/> <b>Years of Experience-</b> {user.skills[0].years_experience} 
            </li></ul>)}
            
            
        </div>
    )
}



export default UsersList