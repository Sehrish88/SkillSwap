import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/usersActions'; 
import RegistrationForm from './RegistrationForm'; 
import UsersList from './UsersList' 
import {MdSwapCalls} from 'react-icons/md';
import Dashboard from './Dashboard'


 class UsersContainer extends Component {

    componentDidMount() {
        this.props.fetchUsers()
        }
     

    render() {
        return (
            <div>
                  <h1 style={{color: 'green', textAlign: 'center'}}> Skill Swap <MdSwapCalls /> </h1>
                  

               

                <UsersList />
                
               
                
               
            </div>
        )
    }
}

export default connect(null, { fetchUsers })(UsersContainer);


