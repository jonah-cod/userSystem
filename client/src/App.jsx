import React, {useState, useEffect} from 'react';
import AdminPanel  from './components/AdminPanel'
import { Outlet } from 'react-router-dom';
import './App.css';
import { loginSuccess } from './redux/actions/authAction';
import { useDispatch } from 'react-redux';
import Header  from './components/Header'



function App() {
    const dispatch = useDispatch()
    const [isAdmin, setisAdmin] = useState(false)
    
    let thisuse = JSON.parse(localStorage.getItem('thisuser'))
    useEffect(() => {
        if (thisuse&&thisuse.user.user_role === 'admin') {
        setisAdmin(true)
    }
    }, [])
    
    console.log(thisuse)
    dispatch(loginSuccess(thisuse))
    
    
    
    return ( 
        <div className="App">

            <Header/>
            <div className="renderHere">
            {isAdmin?<AdminPanel/>: ""}
                <Outlet/>
            </div>
        </div>
          
        
    );
}

export default App;