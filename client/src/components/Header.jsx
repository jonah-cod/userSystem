import React from 'react'
import { Link } from 'react-router-dom'
import brand from '../images/projects-logo.png'
import user from '../images/user.jpg'

const Header = () => {
    let loggedin = true;
    return (
        <>
            <div className="brand">
                <img src={brand} alt="" />
            </div>
            <div className="navs">
                <Link to='' className='nav'>Projects</Link>
                <Link to='' className='nav'>Tasks</Link>
                {loggedin? <Link to='' className='nav'>Sign Out</Link> 
                : <Link to='' className='nav'>Sign in</Link>}
                
                
                <div className="account">
                    <img src={user} alt="" />
                    <i className="fas fa-caret-down fa-2x"></i>
                </div>
                
            </div>
            
        </>
    )
}

export default Header
