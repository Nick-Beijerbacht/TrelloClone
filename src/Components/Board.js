import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { createStore } from 'redux';
import boardReducer, { editCard } from "../Reducer/Board";
import './Board.css';
import List from './List';

const Board = ({project}) => {

    const store = createStore(boardReducer);

    const [count, counter] = useState(0);
    const [listTitle, updateListTitle] = useState("");
    const [lists, updateLists] = useState([]);

    const onClick = () => {
        const list = {"id": "l"+count, "title": listTitle, "cards": []};
        updateLists( arr => [...arr, list]);
        counter(count+1);
    };

    const handleOnDragEnd = (result) => {
        store.dispatch(editCard(result));
    }

    return(
        <div className="board-container">
            <h1 className="board-projectname">{project}</h1>
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="list-container">
                {
                    lists.map(({id, title}) => <List key={id} title={title} listId={id} store={store}/>)
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