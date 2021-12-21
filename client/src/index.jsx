import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Project from './components/Project';
import Tasks from './pages/Tasks';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { Provider } from 'react-redux';
import {store} from './redux/store'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<App />}>
          { <Route index element={<Home/>}/> }
          <Route path='projects' element={<Project/>}/>
          <Route path='tasks' element={<Tasks/>}/>
          <Route path='signup' element={<SignUp/>}/>
          <Route path='signin' element={<SignIn/>}/> 
        </Route>
        
        
      </Routes>
      </Provider>

    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
