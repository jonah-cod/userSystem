import React, { useEffect, useState } from 'react';
import { useSelector} from 'react-redux'
import { Outlet } from 'react-router-dom';
import axios from 'axios'
import TaskProject from './TaskProject';

import ReactTooltip from 'react-tooltip';


const Project = () => {
    const user = useSelector(state => state.user)
    const [data, setdata] = useState()
    useEffect(() => {
        setTimeout(async() => {
            if (user) {
                await axios({
                url: `http://localhost:3002/projects/projecttasks`,
                method: 'GET',
                params: { id:user.user.id },
                
                
            }).then(( response)=>{
                console.log(response.data);
                if (response.data === 'no data') {
                    return(<h2>No data found</h2>)
                }
                setdata(response.data)

            }).catch(Error=>{
                console.log(Error.response.status);
            })
            }
            
            
        }, 1000);
    
    }, [])
    
    return (
        
        <div className='Project'>
            
           {data?
           <>
           <h2 data-tip="header" data-place="right"  data-effect="solid">{data.details.title}</h2>
            <ReactTooltip/>
            <small >Start Date:{data.details.startDate}</small> <small>Due Date:{data.details.startDate}</small>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, recusandae nesciunt ipsa numquam ducimus cum blanditiis quis inventore ut hic repellat ex autem molestiae, commodi dolorum eum quaerat quam, corporis ipsum enim reprehenderit corrupti. Unde magni incidunt expedita minus culpa sequi eaque libero perspiciatis commodi, hic maiores fugit nisi!</p>

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
