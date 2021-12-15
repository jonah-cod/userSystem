import React from 'react';
import ReactTooltip from 'react-tooltip';

const Project = () => {
    return (
        <div className='Project'>
            
            <h2 data-tip="header" data-place="right"  data-effect="solid">Project Name</h2>
            <ReactTooltip/>
            <small >Start Date</small> <small>Due Date</small>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos, recusandae nesciunt ipsa numquam ducimus cum blanditiis quis inventore ut hic repellat ex autem molestiae, commodi dolorum eum quaerat quam, corporis ipsum enim reprehenderit corrupti. Unde magni incidunt expedita minus culpa sequi eaque libero perspiciatis commodi, hic maiores fugit nisi!</p>
        </div>
    )
}

export default Project
