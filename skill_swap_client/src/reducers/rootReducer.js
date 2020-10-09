import { combineReducers } from 'redux'
import { usersReducer } from './usersReducer'
import { skillsReducer } from './skillsReducer' 
import authReducer from './authReducer'

 const rootReducer = combineReducers({
    users: usersReducer,
    skills: skillsReducer,
    auth: authReducer 
}) 

export default rootReducer 