import React from 'react';
import classes from './header.module.css';
import { NavLink } from "react-router-dom";
 
function Header () {
 
    return (
        <div className={classes.header}>SL
        <hr></hr>
        <nav>
            <ul>
                <li>
                     <NavLink activeClassName={classes.active} to='/'>Home</NavLink> 
                </li>
                {/* <li>
                     <NavLink activeClassName={classes.active} to='/about'>About</NavLink> 
                </li> */}
                <li>
                     <NavLink activeClassName={classes.active} to='/lie'>Living In Error</NavLink> 
                </li>
                <li>
                     <NavLink activeClassName={classes.active} to='/bab'>Broken & Bent</NavLink> 
                </li>
                <li>
                     <NavLink activeClassName={classes.active} to='/gag'>Goodnight & Goodbyes</NavLink> 
                </li>
                {/* <li>
                <NavLink activeClassName={classes.active} to='/log'>Login</NavLink> 
                </li> */}
                <li>
                <NavLink activeClassName={classes.active} to='/Signup'>Signup</NavLink> 
                </li>
            </ul>
        </nav>
        </div>

        
    )
 
}
 
export default Header;