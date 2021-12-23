import React, {useEffect} from 'react';
import AdminPanel  from './components/AdminPanel'
import { Outlet } from 'react-router-dom';
import './App.css';


import Header  from './components/Header'


function App() {
    let isAdmin = true;
    
    
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