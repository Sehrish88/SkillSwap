//synchronous action creators 

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        payload: user 
    }
}

//asynchronous action creaters 
export const login = credentials => {

    return dispatch => {
        return fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify({email: "sbalouch@gmail.com", password: "password"})
        })
    }
        
     
}