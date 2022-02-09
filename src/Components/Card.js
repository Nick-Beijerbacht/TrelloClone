import React from 'react';
import './Card.css';

const Card = ({task, id, listId}) => {

    return(
        <div className="card">
            <p>{task}</p>
            <p>{id}</p>
            <p>{listId}</p>
        </div>
    )
}

export default Card;