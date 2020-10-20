import React from 'react'
import {Link, NavLink} from 'react-router-dom'

import Sighnedlinks from './Signedinlinks'
import Sighnedoutlinks from'./Signedoutlinks'
const Navbar=()=>{
    return(
   <div>
    <nav>
        <div className="nav-wrapper blue"> 
            <div className="container">
            <a href="#" className="brand-logo">Shreya Company</a>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            <Sighnedlinks></Sighnedlinks>
            <Sighnedoutlinks></Sighnedoutlinks>
            </ul>
            </div>
        </div>
    </nav>
    <ul id="slide-out" className="sidenav">
    <Sighnedlinks></Sighnedlinks>
    <Sighnedoutlinks></Sighnedoutlinks>
   </ul>
 
</div>


    );
}
export default Navbar