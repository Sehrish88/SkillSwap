import React from 'react';
import { connect } from 'react-redux'; 
import authReducer from '../reducers/authReducer' 

const Dashboard = ({user}) => {
    console.log(user)
    return <h3 style={{color: 'green', textAlign: 'center'}}> Welcome {user.name}</h3>; 

}

const mapStateToProps = (state) => {
    return {
        user: state.auth.currentUser, 
    }
    };

export default  connect(mapStateToProps)(Dashboard); 
