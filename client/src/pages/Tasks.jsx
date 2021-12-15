import React from 'react'
import Category from '../components/Category'

const Tasks = () => {
    let categories = ['unassigned', 'ongoing', 'pending', 'completed']
    return (
        <div className='Tasks'>
            {categories.map((category, index)=>(<Category category={category} key={index}/>))}
            
        </div>
    )
}

export default Tasks
