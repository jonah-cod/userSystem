import React from 'react'
import Task from './Task'

const Category = ({category}) => {
    return (
        <div className='Category'>
            <h2>{category}</h2>
                <Task/>
                
        </div>
    )
}

export default Category
