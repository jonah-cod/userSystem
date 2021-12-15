import React from 'react'
import { NavLink } from 'react-router-dom'
import brand from '../images/projects-logo.png'
import user from '../images/user.jpg'

const Header = () => {
    let loggedin = true;
    return (
        <div className = "App-header">
            <div className="brand">
                <NavLink to='/'>
                    <img src={brand} alt="" />
                </NavLink>
                
            </div>
            <div className="navs">
                <NavLink to='/projects' className='nav'>Projects</NavLink>
                <NavLink to='/tasks' className='nav'>Tasks</NavLink>
                {loggedin? <NavLink to='' className='nav'>Sign Out</NavLink> 
                : <NavLink to='' className='nav'>Sign in</NavLink>}
                
                
                <div className="account">
                    <img src={user} alt="" />
                    <i className="fas fa-caret-down fa-2x"></i>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header
