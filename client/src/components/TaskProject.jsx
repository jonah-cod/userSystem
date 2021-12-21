import React from 'react'
import { Link } from 'react-router-dom'

const TaskProject = ({task}) => {
    
    const showStatus = (id)=>{
        let status = document.getElementById(id)
        status.style.visibility = 'visible'
    }
    
    const hideStatus = (e)=>{
        const btn = e.Target;
        console.log(btn)
    btn.style.visibility = 'hidden';
    }
        // let status = document.getElementById(id)
        // if (status) {
        //     status.addEventListener('mouseout', (e)=>{
        //     if (!status.contains(e.relatedTarget)) {
        //         status.style.visibility = 'hidden'
        //     }
        // })
        // }
              
    
    
    return (
        <div className={`TaskProject ${task.status}`} data-tip={task.title} data-place="right"  data-effect="solid">
            <Link to={`/projects/:${task.id}`} ><h4>{task.title}</h4></Link>
            <small >{task.status}</small>
            <span>start date</span>
            <span>Due date</span>
            <i class={`fas fa-ellipsis-h icon`} onClick={()=>{showStatus(task.id)}}></i>
            <Link to={ `/projects/:${task.id}` } id= {`${task.id}`} className='viewStatus' 
            onMouseOver={hideStatus}> View this task</Link>
        </div>
    )
}

export default TaskProject
