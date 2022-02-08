import React from 'react';
import { useDrag } from "react-dnd";
import './Card.css';

const Card = ({task}) => {

    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "card",
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      }));

    return(
        <div className="card" ref={dragRef}
        style={{
          backgroundColor: isDragging ? "#fbb" : "palegoldenrod",
        }}>
            <p>{task}</p>
        </div>
    )
}

export default Card;