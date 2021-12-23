import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'



const Projects = () => {
    useEffect(() => {
        setTimeout(async() => {
            await axios.get('http://localhost:3002/projects/projects')
            .then(Response=>{
                let {data} = Response;
            })
        }, 1000);
    }, [])
    return (
        <div className='all-projects'>
            <h1>projects</h1>
            <div className="projects-container">

            </div>
        </div>
    )
}

export default Projects
