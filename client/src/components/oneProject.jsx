import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import axios from 'axios'
import TaskProject from './TaskProject';
import { handledate } from '../helpers/dateHandler';

import ReactTooltip from 'react-tooltip';


const OneProject = () => {
    
    let params = useParams()
    const projects = useSelector(state => state.projects)
    
    const [data, setdata] = useState()
    let id = params.projectId;
    const project = ()=>{
        return (projects.filter(project=> {return project.projectId === id}))
    }
    ;
    
    useEffect(() => {
        setTimeout(async() => {
            await axios({
                url: `http://localhost:3002/tasks/tasks`,
                method: 'GET',
                params: { id }
            }).then(( Response)=>{
                let {data} = Response;
                if (data === 'no data') {
                    let proje = project()[0]
                    return setdata({details:proje})

                }else{
                    return setdata(data)
                }
                
                

            }).catch(Error=>{
                console.log(Error);
            })
            
            
            
        }, 1000);
    
    }, [])
    
    return (
        
        <div className='Project'>
            
           {data?
           <>
           <h2 >{data.details.title}</h2>
            <small >Start Date:{handledate(data.details.startDate)}</small> <small>Due Date:{handledate(data.details.endDate)}</small>
            <p style={({maxWidth: '500px'})}>{data.details.p_description}</p>

            <div className="TasksOnProject">
                <h4>Tasks</h4>
                <div className="TasksContainer">
                    {data.tasks? data.tasks.map(task=>( <TaskProject task={task} key={task.taskId} />
                    )): 'no tasks yet in this project'}
                    
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
            </>: <p>just a minute fetching data...</p>}
        </div>

    )
}

export default OneProject
