import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {v4} from 'uuid';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const CreateProject = () => {
    const navigate = useNavigate()
    const [project_title, setproject_title] = useState()
    const [desc, setdesc] = useState()
    const [startDate, setstartDate] = useState()
    const [endDate, setendDate] = useState()
    const [message, setmessage] = useState(false)
    const handlesubmit = async(e)=> {
        e.preventDefault()
        let id = v4()
            await axios.post('http://localhost:3002/projects/create', 
                {
                    ProjectId: id,
                    title: project_title,
                    p_description: desc,
                    start_Date: startDate,
                    endDate: endDate,
                    }
            ).then(Response=>{
                
                if (Response.data === 'success') {
                    setmessage(true) 
                    setTimeout(() => {
                        setmessage(false)
                        navigate('/projects/all')
                    }, 2000);
                    
                    
                }
            })
        }
    return (
        <div className='Projects'>
            <div className={message? 'message message-active': 'message'}>
            <i class="far fa-check-circle fa-5x"></i>
                <p style={({fontSize: '1.5rem'})}>project created successfully</p>
            </div>
            <h2>create project</h2>
            <form action="" onSubmit={handlesubmit} style={ ({opacity:message? .1: .7})}>
                <input type="text" 
                value={project_title} 
                onChange={(e)=>setproject_title(e.target.value)}
                placeholder='project title' required/>

                <textarea  cols="30" rows="10" 
                            value={desc}
                            onChange={e=>setdesc(e.target.value)}
                            placeholder='project description' required></textarea>

                <input type="date" 
                        value={startDate}
                        onChange={e=>setstartDate(e.target.value)}
                        placeholder='start date'required min={new Date().toISOString().split('T')[0]}/>

                <input type="date" 
                        value={endDate}
                        onChange={e=>setendDate(e.target.value)}
                        placeholder='end date' required min={new Date().toISOString().split('T')[0]}/>
                <Button text='submit'/>
            </form>
        </div>
    )
}

export default CreateProject
