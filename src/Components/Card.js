import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Card.css';

const Card = ({task, id, index}) => {

    return(
        <Draggable key={id} draggableId={id} index={index}>
            {(provided) => (
                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <div className="card">
                        <p>{task}</p>
                    </div>
                </li>
            )}
        </Draggable>
    )
}

export default Card;