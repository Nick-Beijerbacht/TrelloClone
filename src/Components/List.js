import React, { useState } from 'react'
import { useDrop } from "react-dnd";
import './List.css'
import Card from './Card'

const List = ({title, id, createCard, moveCard}) => {

    const [cardTask, updateCardTask] = useState("")
    const [cardList, updateCards] = useState([])

    const onClick = () => {
        updateCards(createCard(cardTask));
    };

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: "card",
        drop: (item) => moveCard(item.id),
        collect: (monitor) => ({
          isOver: monitor.isOver(),
        }),
    }));

    return (
        <div className="list">
            <h3 className='list-title'>{title}</h3>
            <div className="card-container" ref={dropRef}
            style={{ backgroundColor: isOver ? "#bbf" : "rgba(0,0,0,.12" }}>
                    {            
                        cardList.map((e, key) =>
                        <Card key={key} task={e.task} id={e.id}/>
                    )}
                <div className='card-create'>
                    <input type="text" onChange={e => updateCardTask({"id": cardList.lenght, "task": e.target.value, "listId": id})}/>
                    <input type="button" onClick={ onClick } value="Create Card" />
                </div>
            </div>
        </div>
    )
}

export default List;