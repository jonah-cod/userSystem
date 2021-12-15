import React from 'react'
import home from '../images/home.png'

const Home = () => {
    
    return (
        <div className="index">
            <img src={home} alt="" />
            <div className="index-text">
                <h4>Content</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, consequuntur? Delectus consequatur, rem recusandae distinctio doloribus voluptatum dolores quae facilis, non debitis expedita eos, rerum alias explicabo error molestias veritatis. </p>
            </div>
            
        </div>
    )
}

export default Home
