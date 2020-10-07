export const skillsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_SKILLS':
            return action.payload
        
            case 'ADD_SKILL':
            return [...state, action.payload]

        //     case 'DELETE_SKILL':
        //         //return {...state, state.filter(skill => skill.id !== action.payload)}
        
        default:  
            return state 
    }

}  