

export const  fetchUsers= () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/users')
        .then(resp => resp.json())
        .then(users => dispatch({ type: 'FETCH_USERS', payload: users})) 
    }
       
} 

export const addUser = user => {
    console.log(user)
    return dispatch => {
        fetch('http://127.0.0.1:3000/users', {
        method: 'POST', 
        body: JSON.stringify({user}),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(user => dispatch({ type: 'ADD_USER', payload: user})) 

    }
    
    const userLogin = (state = {currentUser: {}, loggedIn: false}, action) => {

        switch(action.type) {
            case 'LOGIN':
                return {...state, loggedIn: true, currentUser : action.payload}

            case 'LOGOUT':
                return {...state, loggedIn: false, currentUser: {}}

        }
    }

} 

