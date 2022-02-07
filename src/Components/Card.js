import React from 'react'
import './Card.css'

const Card = ({task}) => {
    return(
        <div className="card">
            <p>{task}</p>
        </div>
    )
}

export default Card;