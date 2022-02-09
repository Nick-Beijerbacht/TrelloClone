import React, { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import './List.css'
import Card from './Card'

const List = ({title, id}) => {

    const [count, counter] = useState(0);
    const [cardTask, updateCardTask] = useState("");
    const [cards, updateCards] = useState([])

    const onClick = () => {
        const card = {"id": count+id, "task": cardTask, "listId": id}
        const tempCards = [...cards, card]
        updateCards(tempCards);
        counter(count+1)
    };

    return (
        <div className="list">
            <h3 className='list-title'>{title}</h3>
            <h3 className='list-title'>{id}</h3>
            <Droppable droppableId={id}>
            {(provided) => (
            <div className={"card-container "+ id} {...provided.droppableProps} ref={provided.innerRef}>
                    {          
                        cards.map(({id, task}, index) => 
                        <Card key={id} task={task} id={id} index={index}/>
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