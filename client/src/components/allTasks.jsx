import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import TaskProject from './TaskProject';

const AllTasks = () => {
    const [currentdata, setdata] = useState([])
    const [taskStatus, settaskStatus] = useState()
    const params = useParams();
    useEffect(() => {
        setTimeout(async() => {
            await axios.get('http://localhost:3002/tasks/',)
                       .then(Response=>{
                            let {data} = Response;
                            if (data) {
                                let status = params.status;
                                console.log(currentdata);
                                settaskStatus(status)
                                if(status==='all'){
                                    setdata(false)
                                    return setdata(data)
                                }
                                if (status==='unassigned') {
                                    setdata(false)
                                    return setdata(data.filter(dat=>(dat.assignedTo===null)))
                                }
                                if(status==='assigned'){
                                    setdata(false)
                                    return setdata(data.filter(dat=>(dat.assignedTo!==null)))
                                }
                                if(status==='completed'){
                                    setdata(false)
                                    return setdata(data.filter(dat=>(dat.isComplete===true)))
                                }
                                
                            }
                       })
        }, 500);
    }, [params.status])

    return (
        <div className='alltasks'>
            <div className="head">
            <h1>tasks</h1>
            <Link to='/createtask'><i className="fas fa-plus"></i>task</Link>
            </div>
            <div className="TasksContainer">
                {currentdata.length? currentdata.map(task=>(<TaskProject task={task} key={task.taskId}/>)): `no ${taskStatus} tasks`}
            </div>
            
        </div>
    )
}

export default AllTasks
