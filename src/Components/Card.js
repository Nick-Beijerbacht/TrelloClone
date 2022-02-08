import React from 'react';
import { useDrag } from "react-dnd";
import './Card.css';

const Card = ({task, id}) => {

    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: "card",
        item: {id: id},
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
            <p>{id}</p>
        </div>
    )
}

export default Card;