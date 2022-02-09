import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import './List.css'
import Card from './Card'

const List = ({title, id, createCard, getCardsForList}) => {

    const [count, counter] = useState(0);
    const [cardTask, updateCardTask] = useState("");

    const onClick = () => {
        const card = {"id": count+"l"+id, "task": cardTask, "listId": id}
        createCard(card);
        counter(count+1)
    };

    return (
        <div className="list">
            <h3 className='list-title'>{title}</h3>
            <h3 className='list-title'>{id}</h3>
            <div className="card-container">
                    {          
                        getCardsForList(id).map((e, key) => e.listId === id ?
                        <Card key={key} task={e.task} id={e.id} listId={id}/>:""
                    )}
                <div className='card-create'>
                    <input type="text" onChange={e => updateCardTask(e.target.value)}/>
                    <input type="button" onClick={ onClick } value="Create Card" />
                </div>
            </div>
        </div>
    )
}

export default List;