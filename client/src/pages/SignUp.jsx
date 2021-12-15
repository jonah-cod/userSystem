import React from 'react'
import Button from '../components/Button'


const SignUp = () => {
    
    return (
        <div className='signup'>
            <h4>sign up</h4>
            <form action="">
                <input type="text"  placeholder='full names'/>
                <input type='email' placeholder='email'/>
                <input type="text" placeholder='address'/>
                <input type="password" placeholder='password'/>
                <input type="password" placeholder='confirm password'/>
                <Button text='sign up'/>
            </form>
            
            
        </div>
    )
}

export default SignUp
