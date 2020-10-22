import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const HomeLink = () => {
    return (<nav className="nav">
        <div className="Container">
            <h6 style={{color: 'green', }}><ul >
               <NavLink to="/">Home</NavLink> <br />
              
            </ul></h6>
        </div>
    </nav>
    )
}

export default HomeLink 