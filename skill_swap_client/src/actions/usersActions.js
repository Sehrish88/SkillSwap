

export const  fetchUsers= () => {
    return (dispatch) => {
        
        fetch('http://127.0.0.1:3000/users')
        .then(resp => resp.json())
        .then(users =>  {
            dispatch({ type: 'FETCH_USERS', payload: users})
        } )
    }
       
} 

export const addUser = user => {
    //console.log(user)
    
    return dispatch => {
        fetch('http://127.0.0.1:3000/users.json', {
        method: 'POST', 
        body: JSON.stringify({user}),
        headers: { 'Content-Type': 'application/json'} 
    })
    .then(resp => resp.json())
    .then(data => {
       dispatch({ type: 'ADD_USER', payload: data.user})
       
    }) 

    } 
    
    

} 
