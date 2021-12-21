import React, {useState} from 'react'
import Button from '../components/Button'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const SignUp = () => {
    const [fNames, setfNames] = useState();
    const [email, setemail] = useState();
    const [address, setaddress] = useState();
    const [password, setpassword] = useState();
    const [cpassword, setcpassword] = useState();
    const [error, seterror] = useState();
    const navigate = useNavigate();

    const handleSignin = async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:3030/register', 
        {full_name:fNames, email, address, password, Cpassword: cpassword})
        .then((Response) =>{
            
            if (Response.data.message) {
                let {message, refresh, token, user} = Response.data;
                if (message === 'success') {
                    let thisuser = {user, refresh, token}
                    localStorage.setItem('thisuser', JSON.stringify(thisuser));
                    navigate('/')

                }
            }else{
                if (Response.data.error === 'Violation') {
                    seterror('You already have an account')
                }else{
                    seterror(Response.data.error)
                }
                
            }
            
    })}
    
    return (
        <div className='signup'>
            {error? <small className='error'>{`${error}!`}</small>: ''}
            
            <h4>sign up</h4>
            <form action="" onSubmit={handleSignin}>
                <input type="text" required value={fNames} placeholder='full names' 
                onChange={(e)=>setfNames(e.target.value)}/>

                <input type='email' required value={email} placeholder='email' 
                onChange={(e)=>setemail(e.target.value)}/>

                <input type="text" required value={address} placeholder='address'  
                onChange={(e)=>setaddress(e.target.value)}/>

                <input type="password" required value={password} placeholder='password' 
                onChange={(e)=>setpassword(e.target.value)}/>

                <input type="password" required value={cpassword} placeholder='confirm password' 
                onChange={(e)=>setcpassword(e.target.value)}/>
                <Button text='sign up'/>
            </form>
            <Link to={'/signin'} className='link'>log in instead!</Link>
            
        </div>
    )
}

export default SignUp
