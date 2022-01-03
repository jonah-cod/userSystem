import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Task = () => {
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    useEffect(() => {
        
        if (!user) {
            navigate('/signin');
        }
    }, [])
    return (
        <div className='Task'>
            <h5 className='task-title'>task title</h5>
            <div className="img">
                <h4>J</h4>
            </div>
            <p className='task-status'>ongoing</p>
            <div className="timeline">
                <p>Dec 20-27</p>
            </div>
        </div>
    )
}

export default Task
