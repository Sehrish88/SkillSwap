import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/usersActions'; 
import RegistrationForm from './RegistrationForm'; 
import UsersList from './UsersList' 
import {MdSwapCalls} from 'react-icons/md';
import Header from './Header'



 class UsersContainer extends Component {

    componentDidMount() {
        
        this.props.fetchUsers()
       
        }
     

    render() {
        return (
            <div>
                   <Header /> 
                  

               

                <UsersList />
                
               
                
               
            </div>
        )
    }
}

export default connect(null, { fetchUsers })(UsersContainer);


