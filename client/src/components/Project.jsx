import React, { useEffect } from 'react';
import axios from 'axios'
import TaskProject from './TaskProject';

import ReactTooltip from 'react-tooltip';

const Project = () => {
    useEffect(() => {
        setTimeout(async() => {
        
            await axios({
                url: `http://localhost:3002/projects/projects`,
                method: 'GET',
                options: {
                params: {  },
                }
                
            }).then(( response)=>{
                console.log(response.data);
            })
            
        }, 1000);
    
    }, [])
    
    let tasks = [
        {
            title: 'title one',
            id: '14',
            status: 'ongoing'
        },
        {
            title: 'title two',
            id: '25',
            status: 'unassigned'
        },
        {
            title: 'title three',
            id: '36',
            status: 'pending'
        },
        {
            title: 'title four',
            id: '47',
            status: 'complete'
        },
        {
            title: 'title four',
            id: '48',
            status: 'pending'
        }
    ]
      
    return (
        <div className='Project'>
            
            <h2 data-tip="header" data-place="right"  data-effect="solid">Project Name</h2>
            <ReactTooltip/>
            <small >Start Date</small> <small>Due Date</small>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, recusandae nesciunt ipsa numquam ducimus cum blanditiis quis inventore ut hic repellat ex autem molestiae, commodi dolorum eum quaerat quam, corporis ipsum enim reprehenderit corrupti. Unde magni incidunt expedita minus culpa sequi eaque libero perspiciatis commodi, hic maiores fugit nisi!</p>

            <div className="TasksOnProject">
                <h4>Tasks</h4>
                <div className="TasksContainer">
                    {tasks.map(task=>( <TaskProject task={task} key={task.id} />
                    ))}
                    <ReactTooltip/>
                </div>
            </div>
            
        </div>

    )
}

export default Project
