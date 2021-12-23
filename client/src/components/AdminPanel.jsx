import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminPanel = () => {
    return (
        <div className='admin-panel'>
            <h2>Admin panel</h2>
            <h4>Projects</h4>
            <div className="projects-panel">
                <NavLink to ='/createproject'
                        style={({isActive})=>({
                            backgroundColor: isActive ? "#282c34": '',
                            opacity: isActive ? .7 : ""
                        })}>create new</NavLink>
                <NavLink to ='/projects'
                        style={({isActive})=>({
                            backgroundColor: isActive ? "#282c34": '',
                            opacity: isActive ? .7 : ""
                        })}>all projects</NavLink>
                <NavLink to =''
                        style={({isActive})=>({
                            backgroundColor: isActive ? "#282c34": '',
                            opacity: isActive ? .7 : ""
                        })}>non-assigned</NavLink>
                <NavLink to =''
                        style={({isActive})=>({
                            backgroundColor: isActive ? "#282c34": '',
                            opacity: isActive ? .7 : ""
                        })}>assigned</NavLink>
                <NavLink to =''
                        style={({isActive})=>({
                            backgroundColor: isActive ? "#282c34": '',
                            opacity: isActive ? .7 : ""
                        })}>completed</NavLink>
            </div>
            <h4>Tasks</h4>
            <div className="projects-panel">
                <NavLink to ='/createtask'
                        style={({isActive})=>({
                            backgroundColor: isActive ? "#282c34": '',
                            opacity: isActive ? .7 : ""
                        })}>create new</NavLink>
                <NavLink to =''
                        style={({isActive})=>({
                            backgroundColor: isActive ? "#282c34": '',
                            opacity: isActive ? .7 : ""
                        })}>all tasks</NavLink>
                <NavLink to =''
                        style={({isActive})=>({
                            backgroundColor: isActive ? "#282c34": '',
                            opacity: isActive ? .7 : ""
                        })}>non-assigned</NavLink>
                <NavLink to =''
                        style={({isActive})=>({
                            backgroundColor: isActive ? "#282c34": '',
                            opacity: isActive ? .7 : ""
                        })}>assigned</NavLink>
                <NavLink to =''
                        style={({isActive})=>({
                            backgroundColor: isActive ? "#282c34": '',
                            opacity: isActive ? .7 : ""
                        })}>completed</NavLink>
            </div>
        </div>
    )
}

export default AdminPanel
