import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (<nav className="nav">
        <div className="navbar">
            <h6 style= {{color: 'green' }}><ul > 
               <NavLink to="/">Home</NavLink> <span className="second-word-formatting"></span>
               <NavLink to="/about">About</NavLink> <span className="second-word-formatting"></span>
               <NavLink to="/register">Register</NavLink> <span className="second-word-formatting"></span>
               <NavLink to="/addSkill">Add Skill</NavLink> <span className="second-word-formatting"></span>
               <NavLink to="/users">Browse Users</NavLink> <span className="second-word-formatting"></span>
               <NavLink to="/skills">Browse skills</NavLink>
              
               
            </ul></h6>
        </div>
    </nav>
    )
}


export default NavBar 