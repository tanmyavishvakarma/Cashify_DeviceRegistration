import React from 'react'
import { NavLink} from 'react-router-dom'
//import Navbar from './Navbar'

const Sighnedlinks=()=>{
    return(    
        <ul className="right">
            <li><NavLink to="/addproject">Add New Project</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink></li>
        </ul>

    );
}
export default Sighnedlinks