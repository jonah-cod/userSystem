import React from 'react'
import { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'
import Button from './Button'
import { handledate } from '../helpers/dateHandler'
import { projectdata } from '../redux/actions/authAction';
import { useDispatch } from 'react-redux'



const Projects = () => {
    const dispatch = useDispatch()
    const [data, setdata] = useState()
    
    
    
    

    const handlemarkcomplete = async (id)=>{
        await axios({
            url: 'http://localhost:3002/projects/complete',
            method: 'POST',
            params:{
                ProjectId: id
            }}
        ).then(Response=>{
            if (Response.data === 'success') {
            window.location.reload();
            
            }
        })
        
    }
    
    useEffect(() => {
        setTimeout(async() => {
            await axios.get('http://localhost:3002/projects/projects')
            .then(Response=>{
                let {data} = Response;
                dispatch(projectdata(data))
                setdata(data)
            })
        }, 1000);
    }, [])
    return (
        <div className='all-projects'>
            <div className="head">
            <h1>projects</h1>
            <Link to='/createproject'><i className="fas fa-plus"></i>project</Link>
            </div>
            <div className="projects-container">
                {data?<table>
                    
                        
                    <tbody>
                        <tr>
                        <th>Project title</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Mark Complete</th>
                    </tr>
                        {data.map((dat, index)=>(<tr key={dat.projectId} className='row'>
                            <Link to={`oneproject/${dat.projectId}`}><td>{`${index+1}: ${dat.title}`}</td></Link>
                            
                            <td>{handledate(dat.startDate)}</td>
                            <td>{handledate(dat.endDate)}</td>
                            <td className='complete'><Button  text={<i className="fas fa-check" style={({color: 'green'})} onClick={()=>{handlemarkcomplete(dat.projectId)}}></i>}/></td>
                        </tr>))}
                    </tbody>
                    
                </table>: <h4>no projects</h4>}
            </div>
        </div>
    )
}

export default Projects
