import React, { useEffect, useState } from 'react';
import { useSelector} from 'react-redux'
import { Outlet } from 'react-router-dom';
import axios from 'axios'
import TaskProject from './TaskProject';

import ReactTooltip from 'react-tooltip';
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../redux/actions/authAction';
import { handledate } from '../helpers/dateHandler';


const Project = () => {
    
    const [data, setdata] = useState()
    const dispatch = useDispatch()
    let thisuse = JSON.parse(localStorage.getItem('thisuser'))
    useEffect(() => {
        dispatch(loginSuccess(thisuse))
        
    }, [])
    const user = useSelector(state => state.user)
    let {id} = user.user
    
    
    useEffect(() => {
        setTimeout(async() => {
            if (user) {
                await axios({
                url: `http://localhost:3002/projects/projecttasks`,
                method: 'GET',
                params: { id: id }
            }).then(( response)=>{
                console.log(response.data);
                if (response.data === 'no data') {
                    <h2>No data found</h2>
                }
                setdata(response.data)

            }).catch(Error=>{
                console.log(Error);
            })
            }
            
            
        }, 1000);
    
    }, [])
    
    return (
        
        <div className='Project'>
            
           {data?
           <>
           <h2>{data.details.title}</h2>
            <small >Start Date:{handledate(data.details.startDate)}</small> <small>Due Date:{handledate(data.details.endDate)}</small>
            <p style={({maxWidth: '550px'})}>{ data.details.p_description}</p>

            <div className="TasksOnProject">
                <h4>Tasks</h4>
                <div className="TasksContainer">
                    {data.tasks.map(task=>( <TaskProject task={task} key={task.taskId} />
                    ))}
                    <ReactTooltip/>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
            </>: <p>just a minute fetching data...</p>}
        </div>

    )
}

export default Project
