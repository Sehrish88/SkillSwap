import React from 'react';
import { connect } from 'react-redux';

const UsersList = ({users}) => {
    console.log(users)
    return(
        <div>
            {users.map(user => <ul><li key={user.id} style= {{border: '3px solid green'}}><h5>{user.name}</h5> - <b>Email:</b> {user.email} <b>Field</b> {user.skills[0].field} <b> Years of Experience-</b> {user.skills[0].years_experience} </li></ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return{users: state.users}
}

export default connect(mapStateToProps)(UsersList) 