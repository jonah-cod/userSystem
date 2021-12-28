import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {v4} from 'uuid';
import { useNavigate } from 'react-router-dom'
import Button from './Button';


    
const CreateTask = () => {
    const navigate = useNavigate()
    const [projectId, setprojectId] = useState()
    const [task_title, settask_title] = useState()
    const [startDate, setstartDate] = useState()
    const [endDate, setendDate] = useState()
    const [data, setdata] = useState();
    const [message, setmessage] = useState(false);
    useEffect(() => {
        setTimeout(async() => {
            await axios.get('http://localhost:3002/projects/projects' 
            ).then(Response=>{
                let {data} = Response;
                console.log(data);
                setdata(data)
            })
        }, 1000);
    }, [])
    
    let id = v4();
    const handlesubmit = async(e)=> {
        e.preventDefault()
            await axios.post('http://localhost:3002/tasks/create', 
                {
                    FK_projectId: projectId,
                    taskId: id,
                    task_title,
                    start_Date: startDate,
                    endDate: endDate,
                    }
            ).then(Response=>{
                let {data} = Response
                if (data === 'success') {
                    setmessage(true) 
                    setTimeout(() => {
                        setmessage(false)
                        navigate('/')
                    }, 2000);
                }
            })
        }
    return (
        <div className='TasksCreate'>
            <div className={message? 'message message-active': 'message'}>
            <i class="far fa-check-circle fa-5x"></i>
                <p style={({fontSize: '1.5rem'})}>task created successfully</p>
            </div>
            <h2>create task</h2>
            <form action="" onSubmit={handlesubmit} style={ ({opacity:message? .1: .7})}>
                <select name="" id="" selected='select project' onChange={e=>setprojectId(e.target.value)} required>
                    <option value="" selected>select project</option>
                    {data? (data.map(dat=>(<option value={dat.projectId} key={dat.projectId}>{dat.title}</option>))): <option value="">no ongoing projects</option>}
                </select>

                <input type="text" 
                value={task_title} 
                onChange={(e)=>settask_title(e.target.value)}
                placeholder='task title' required/>
                
                <input type="date" 
                        value={startDate}
                        onChange={e=>setstartDate(e.target.value)}
                        placeholder='start date' required/>

                <input type="date" 
                        value={endDate}
                        onChange={e=>setendDate(e.target.value)}
                        placeholder='end date' required/>
                <Button text='submit'/>
            </form>
        </div>
    )
}

export default CreateTask
