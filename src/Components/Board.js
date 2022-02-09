import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import './Board.css'
import List from './List'

const Board = ({project}) => {

    const [count, counter] = useState(0);
    const [listTitle, updateListTitle] = useState("")
    const [lists, updateLists] = useState([]);
    const [cards, updateCards] = useState([])

    const onClick = () => {
        const list = {"id": "l"+count, "title": listTitle, "cards": []};
        updateLists( arr => [...arr, list]);
        counter(count+1);
    };

    const createCard = (data) => {
        const tempCards = [...cards, data]
        updateCards(tempCards);
        return tempCards;
    }

    const getCardsForList = (listId) => {
        console.log('get cards: ', cards.filter((card) => listId === card.listId));
        return cards.filter((card) => listId === card.listId);
    }

    const handleOnDragEnd = (result) => {
        console.log(result);
        console.log(getCardsForList(result.source.droppableId).map(e => (e.id === result.draggableId)));
        cards.map(e => (e.id === result.draggableId ? Object.assign(e.listId, result.destination.droppableId): e));
        console.log(cards);
    }

    return(
        <div className="board-container">
            <h1 className="board-projectname">{project}</h1>
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="list-container">
                {
                    lists.map(({id, title}) => <List key={id} title={title} id={id} createCard={createCard} getCardsForList={getCardsForList}/>)
                }
                <div className='list-create'>
                    <input type="text" onChange={e => updateListTitle(e.target.value)}/>
                    <input type="button" onClick={onClick} value="Create List" />
                </div>
            </div>
            </DragDropContext>
        </div>
    )
}

export default Board;