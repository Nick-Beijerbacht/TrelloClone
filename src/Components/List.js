import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { addCard } from "../Reducer/Board";
import './List.css'
import Card from './Card'

const List = ({title, listId, store}) => {

    const [count, counter] = useState(0);
    const [cardTask, updateCardTask] = useState("");


    const onClick = () => {
        const card = {"id": count+listId, "task": cardTask, "listId": listId}
        store.dispatch(addCard(card));
        counter(count+1);
        console.log(store.getState().cards);
    };

    return (
        <div className="list">
            <h3 className='list-title'>{title}</h3>
            <h3 className='list-title'>{listId}</h3>
            <Droppable droppableId={listId}>
            {(provided) => (
            <div className={"card-container "+ listId} {...provided.droppableProps} ref={provided.innerRef}>
                    {          
                        store.getState().cards.map((e , index) => listId === e.listId ?
                        <Card key={e.id} task={e.task} id={e.id} index={index}/>:""
                    )}
                <div className='card-create'>
                    <input type="text" onChange={e => updateCardTask(e.target.value)}/>
                    <input type="button" onClick={ onClick } value="Create Card" />
                </div>
                {provided.placeholder}
            </div>
            )}
            </Droppable>
        </div>
    )
}

export default List;