import React from 'react'; 
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/usersActions'




const SearchBar = (props) =>{
    return(
        <input
        type="search"
        className='search'
        placeholder="search users by field"
        onChange={props.handleChange}

        
        />
        
        
        
    )
}

export default connect(null, { fetchUsers })(SearchBar); 