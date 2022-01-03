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
import CreateProject from './components/createProject';
import CreateTask from './components/CreateTask';
import Projects from './components/Projects';
import OneProject from './components/oneProject'
import AllTasks from './components/allTasks';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home/>}/> 
          <Route path='project' element={<Project/>}>
            <Route path=':id' element={<p>hi</p>}/>
          </Route>
          <Route path='/projects/oneproject/:projectId' element={<OneProject/>}/>
          <Route path='createproject' element={<CreateProject/>}/>
          <Route path='createtask' element={<CreateTask/>}/>
          <Route path='projects/:category' element={<Projects/>}/>
          <Route path='alltasks/:status' element={<AllTasks/>}/>
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
