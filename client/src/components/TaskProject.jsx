import React from 'react'
import { Link } from 'react-router-dom'

const TaskProject = ({task}) => {
    
    const showStatus = (id)=>{
        let status = document.getElementById(id)
        status.style.visibility = 'visible'
    }
    
   
    
    
    return (
        <div className={`TaskProject ${task.task_status}`} data-tip={task.full_name || 'not assigned'} data-place="right"  data-effect="solid">
            <Link to={`/projects/:${task.taskId}`} ><h4>{task.task_title}</h4></Link>
            <small >{task.task_status}</small>
            <span>start date</span>
            <span>Due date</span>
            <i class={`fas fa-ellipsis-h icon`} onClick={()=>{showStatus(task.taskId)}}></i>
            <Link to={ `/projects/:${task.taskId}` } id= {`${task.taskId}`} className='viewStatus' > View this task</Link>
        </div>
    )
}

export default TaskProject
