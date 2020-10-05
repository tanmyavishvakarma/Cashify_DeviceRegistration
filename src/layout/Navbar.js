import React from 'react'
import {Link, NavLink} from 'react-router-dom'

import Sighnedlinks from './Signedinlinks'
import Sighnedoutlinks from'./Signedoutlinks'
const Navbar=()=>{
    return(
   <div>
    <nav>
        <div class="nav-wrapper blue"> 
            <div class="container">
            <a href="#" class="brand-logo">Shreya Company</a>
            <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
            <Sighnedlinks></Sighnedlinks>
            <Sighnedoutlinks></Sighnedoutlinks>
            </ul>
            </div>
        </div>
    </nav>
    <ul id="slide-out" class="sidenav">
    <Sighnedlinks></Sighnedlinks>
    <Sighnedoutlinks></Sighnedoutlinks>
   </ul>
 
</div>


    );
}
export default Navbar