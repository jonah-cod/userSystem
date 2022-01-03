import React from 'react'
import { useEffect, useState } from 'react'
import { Link, useParams} from 'react-router-dom'
import axios from 'axios'
import Button from './Button'
import { handledate } from '../helpers/dateHandler'
import { projectdata } from '../redux/actions/authAction';
import { useDispatch, useSelector } from 'react-redux'



const Projects = () => {
    const dispatch = useDispatch()
    const params = useParams();
    const [data, setdata] = useState()
    const user = useSelector(state => state.user)
    const [users, setusers] = useState()
    const [userId, setuserId] = useState()
    const [projectId, setprojectId] = useState()
    
    
    

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
    
    let mainurl;
    const urlall = 'http://localhost:3002/projects/projects'
    const urlunassigned = 'http://localhost:3002/projects/unassigned'
    
    let category = params.category
    useEffect(() => {
        
        if (category === 'all') {
            mainurl = urlall
        }else if(category === 'unassigned'){
            mainurl = urlunassigned
        }
            setTimeout(async() => {
                await axios.get(mainurl)
                .then(Response=>{
                    let {data} = Response;
                    dispatch(projectdata(data))
                    setdata(data)
                })
            }, 500);
    }, [category])


    useEffect(() => {
        setTimeout(async() => {
            await axios.post('http://localhost:3030/users', {
            id: user.user.id
        }).then(result=>{
            console.log(result.data);
            setusers(result.data)
        })
        }, 500);
        
    }, [])
    const handleassign = async(e)=>{
        e.preventDefault();
        if (!projectId || !userId) {
            alert('select values')
        }
        await axios.post('http://localhost:3002/projects/assign', {projectId, userId}).then(res=>{
            if (res.data) {
                console.log(res.data);
                document.getElementById('assign').style.visibility = 'hidden'
                document.getElementById('project').style.opacity = 1
            }
        })
        
    }
    const handledelete = async()=>{
        await axios.post('http://localhost:3002/projects/delete', {
        ProjectId: projectId
        })
    }
    return (
        <div className='all-projects'>
                        <div className="head">
            <h1>projects</h1>
            <Link to='/createproject'><i className="fas fa-plus"></i>project</Link>
            </div>
            <div className="projects-container">
                {/* this is a hidden form for creating projects */}
                <form action="" style={({visibility: 'hidden'})} onSubmit={handleassign} id='assign'>
                    <select onChange={e=>setuserId(e.target.value)}>
                        <option selected>select developer</option>
                        {users? (users.map(use=>(<option value={use.id}>{use.full_name}</option>))):<option>no users</option>}
                    </select>
                    <Button text={'submit'}/>
                </form>
                
                {data?<table id='project'>
                    
                        
                    <tbody>
                        <tr>
                        <th>Project title</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Mark Complete</th>
                        <th>assign</th>
                        <th>Delete</th>
                    </tr>
                        {data.map((dat, index)=>(<tr key={dat.projectId} className='row'>
                            <Link to={`/projects/oneproject/${dat.projectId}`}><td style={({})}>{`${index+1}: ${dat.title}`}</td></Link>
                            
                            <td>{handledate(dat.startDate)}</td>
                            <td>{handledate(dat.endDate)}</td>
                            <td className='complete'><Button text={<i className="fas fa-check" style={({color: 'green'})} onClick={()=>{handlemarkcomplete(dat.projectId)}}></i>}/></td>
                            <td><button onClick={()=>{
                                setprojectId(dat.projectId)
                                document.getElementById('assign').style.visibility = 'visible'
                                document.getElementById('project').style.opacity = .2}}>assign</button></td>
                                <td><button onClick={()=>{
                                    setprojectId(dat.projectId)
                                    handledelete()}}>delete</button></td>
                        </tr>))}
                    </tbody>
                    
                </table>: <h4>no projects</h4>}
            </div>
        </div>
    )
}

export default Projects
