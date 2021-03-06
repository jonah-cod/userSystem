import React from 'react'
import { NavLink } from 'react-router-dom'
import brand from '../images/projects-logo.png'
import userImg from '../images/user.jpg'
import { logout } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    
    const {user} = useSelector(state => state)
    const i = ()=>{
        // if (!user) {
        //     navigate('/signin');
        // }
    }
    const handleLogout = ()=>{
        navigate('/');
        localStorage.clear();
        window.location.reload();
        dispatch(logout())
        
        
    }
    return (
        <div className = "App-header">
            <div className="brand">
                <NavLink to='/'>
                    <img src={brand} alt="" />
                </NavLink>
                
            </div>
            <div className="navs">
                <NavLink style={({isActive})=>({
                    borderBottom: isActive ? "#15b0ab solid 2px" : '',
                    opacity: isActive ? .7 : ""
                })} to='/' className='nav'>Home</NavLink>
                <NavLink style={({isActive})=>({
                    borderBottom: isActive ? "#15b0ab solid 2px": '',
                    opacity: isActive ? 1 : ""
                })} to='/project' className='nav' >Projects</NavLink>
                
                <NavLink style={({isActive})=>({
                    borderBottom: isActive ? "#15b0ab solid 2px": '',
                    opacity: isActive ? .7 : ""
                })} to='/tasks' className='nav'>Tasks</NavLink>

                {user? <NavLink to='' onClick={handleLogout} className='nav'>Sign Out</NavLink> 
                : <NavLink style={({isActive})=>({
                    borderBottom: isActive ? "#15b0ab solid 2px": '',
                    opacity: isActive ? .7 : ""
                })} to='/signin' className='nav'>Sign in</NavLink>}
                
                
                <div className="account">
                    <img src={userImg} alt="" />
                    <i className="fas fa-caret-down fa-2x"></i>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header
