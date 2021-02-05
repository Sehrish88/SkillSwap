const initialState = {
    users: [],
    posting: false 
}

export const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_USERS':
            return {...state, users: action.payload}
        case 'ADD_USER':
            return { ...state, users: [...state.users, action.payload], posting: false} 
        case 'POSTING_USER':
            return {...state, posting: true} 


             default:
            return state 
            
    }

}