import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (<nav className="nav">
        <div className="Container">
            <h6 style={{color: 'green', }}><ul >
               <NavLink to="/">Home</NavLink> <br />
               <NavLink to="/about">About</NavLink><br />
               <NavLink to="/register">Register</NavLink><br />
               <NavLink to="/addSkill">Add Skill</NavLink><br />
               <NavLink to="/users">Browse Users</NavLink><br />
               <NavLink to="/skills">Browse skills</NavLink><br />
              
              
            </ul></h6>
        </div>
    </nav>
    )
}


export default NavBar 