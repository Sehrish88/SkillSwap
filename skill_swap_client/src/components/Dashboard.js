import React from 'react';
import { connect } from 'react-redux'; 
import authReducer from '../reducers/authReducer' 

const Dashboard = ({user}) => {
    return <h3> Welcome {user.email} </h3>; 

}

// const mapStateToProps = (state) => {
//     return {
//         user: state.auth.currentUser, 
//     }
//     };

export default  Dashboard; 
