export const  fetchSkills= () => {
    console.log('skills action')
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/skills')
        .then(resp => resp.json())
        .then(skills => dispatch({ type: 'FETCH_SKILLS', payload: skills})) 
    }
       
} 

export const addSkill = skill => {
    console.log(skill)
    return dispatch => {
        fetch('http://127.0.0.1:3000/skills', {
        method: 'POST', 
        body: JSON.stringify({skill}),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(user => dispatch({ type: 'ADD_SKILL', payload: skill})) 

    }
    

} 
