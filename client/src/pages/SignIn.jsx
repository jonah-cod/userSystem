import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import Button from '../components/Button';
import axios from 'axios';
import { loginSuccess } from '../redux/actions/authAction';

const Signin = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [error, seterror] = useState()
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const login = async(e)=>{
        e.preventDefault();
        console.log(`${email} \n ${password}`)
        await axios.post('http://localhost:3030/login', {email, password})
        .then(Response=>{
            let {message} = Response.data;
            if (message === 'success') {
                dispatch(loginSuccess(Response.data));
                setemail('')
                setpassword('')
                navigate('/')
                window.location.reload()
                
                localStorage.setItem('thisuser', JSON.stringify(Response.data))
            }else if (message === 'wrong password'){
                seterror('wrong email or password!')
            }else if(message === 'no user found'){
                seterror('account doesn\'t exist!')
                
            }
        })

        
    }
    
    return (
        <div className='signin'>
            {error? <small className='error'>{error}</small>: ''}
            <h4>sign in</h4>
            <form action="" onSubmit={login}>
                <input type='email' required value={email} placeholder='email' onChange={(e)=>{
                    setemail(e.target.value )
                }}/>
                <input type="password" required value={password} placeholder='password' onChange={(e)=>{
                    setpassword(e.target.value)
                }}/>
                
                <Button text='sign in' />
                
            </form>
            <Link to={'/signup'} className='link'>create account instead!</Link>
        </div>
    )
}

export default Signin
