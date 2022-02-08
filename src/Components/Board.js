import React, { useState } from 'react'
import './Board.css'
import List from './List'

const Board = ({project}) => {

    const [listTitle, updateListTitle] = useState("")
    const [lists, updateLists] = useState([{"id": 0, "title":"test", "cards": [{"id": 0, "task":"test", "listId": 0}]}]);

    const onClick = () => {
        updateLists( arr => [...arr, listTitle]);
    };

    function moveCard (listId, cardId) {
        console.log(listId);
        console.log(cardId);

    };

    const createCard = (data) => {
        const currentList = lists.filter((item) => data.listId === item.id);
        const currentCards = currentList[0].cards;     
        const updatedCards = [...currentCards, data];
        lists.map(e => (e.id === data.listId ? Object.assign(e.cards, updatedCards): e));
        return updatedCards;
    }

    return(
        <div className="board-container">
            <h1 className="board-projectname">{project}</h1>
            <div className="list-container">
                {
                    lists.map((e, key) => <List key={key} title={e.title} id={e.id} createCard={createCard} moveCard={moveCard.bind(null, e.id)}/>)
                }
                <div className='list-create'>
                    <input type="text" onChange={e => updateListTitle({"id": lists.length, "title": e.target.value, "cards": []})}/>
                    <input type="button" onClick={onClick} value="Create List" />
                </div>
            </div>
        </div>
    )
}

export default Board;