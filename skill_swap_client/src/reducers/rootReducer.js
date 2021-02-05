import { combineReducers } from 'redux'
import { usersReducer } from './usersReducer'
import { skillsReducer } from './skillsReducer' 
import authReducer from './authReducer'
import currentUser from './currentUserReducer' 
import currentUserReducer from './currentUserReducer'
import loginFormReducer from './loginFormReducer'

 const rootReducer = combineReducers({
    users: usersReducer,
    skills: skillsReducer,
    auth: authReducer,  
    currentUser: currentUserReducer,
    loginFormReducer 
}) 

export default rootReducer 