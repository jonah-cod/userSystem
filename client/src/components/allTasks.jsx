import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import TaskProject from './TaskProject';

const AllTasks = () => {
    const [data, setdata] = useState()
    useEffect(() => {
        setTimeout(async() => {
            await axios.get('http://localhost:3002/tasks/',)
                       .then(Response=>{
                            let {data} = Response;
                            if (data) {
                                setdata(data)
                            }
                       })
        }, 500);
    }, [])

    return (
        <div className='alltasks'>
            <div className="head">
            <h1>tasks</h1>
            <Link to='/createtask'><i className="fas fa-plus"></i>task</Link>
            </div>
            <div className="TasksContainer">
                {data? data.map(task=>(<TaskProject task={task} key={task.taskId}/>)): 'no tasks'}
            </div>
            
        </div>
    )
}

export default AllTasks
