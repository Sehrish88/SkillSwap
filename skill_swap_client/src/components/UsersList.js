import React from 'react';
import { connect } from 'react-redux';
import HomeLink from './HomeLink'


const UsersList = ({users}) => {
    console.log(users)
    return(
        <div>
           <HomeLink />
            {users.map(user => <ul><li key={user.id} style= {{border: '3px solid green'}}><h4>{user.name}</h4>  <b>Email:</b>{user.email} <b>Field</b> {user.skills[0].field} <b> Years of Experience-</b> {user.skills[0].years_experience} </li></ul>)}
            
            
        </div>
    )
}

const mapStateToProps = state => {
    return{users: state.users}
}

export default connect(mapStateToProps)(UsersList) 