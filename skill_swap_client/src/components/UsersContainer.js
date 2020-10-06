import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/usersActions'; 
import RegistrationForm from './RegistrationForm'; 


 class UsersContainer extends Component {
     componentDidMount() {
         this.props.fetchUsers()
     }

    render() {
        return (
            <div>
                Users Container 
                <RegistrationForm />
            </div>
        )
    }
}

export default connect(null, { fetchUsers })(UsersContainer);


