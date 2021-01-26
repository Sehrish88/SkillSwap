import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/usersActions'; 
import RegistrationForm from './RegistrationForm'; 
import UsersList from './UsersList' 
import {MdSwapCalls} from 'react-icons/md';
import Header from './Header'
import SearchBar from './SearchBar'



 class UsersContainer extends Component {

    state = {
        filteredUsers: [] 
    }

    componentDidMount() {
        
        this.props.fetchUsers()
       
        }

        filteredUsers = (e) => {
            const field = e.target.value 
           const filteredUsers = this.props.users.filter((user) => user.skills[0].field.includes(field) ) 
           this.setState({filteredUsers})



        }

        usersArray = () => {
            return this.state.filteredUsers.length > 0 ? this.state.filteredUsers : this.props.users

        }
     

    render() {
        return (
            <div>
                   <Header /> 
                   <SearchBar handleChange = {this.filteredUsers}/> 
            

                   <UsersList users={this.usersArray()}/>
                
               
                
               
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{users: state.users} 
}



export default connect(mapStateToProps, { fetchUsers })(UsersContainer);


