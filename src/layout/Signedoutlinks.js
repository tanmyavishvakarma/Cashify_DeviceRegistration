import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Navbar from './Navbar'

const Sighnedoutlinks=()=>{
    return(    
        <ul className="right">
          
            <li><NavLink to="/signup">Sigh Up</NavLink></li>
            <li><NavLink to="/signin">Login</NavLink></li>
            
        </ul>

    );
}
export default Sighnedoutlinks