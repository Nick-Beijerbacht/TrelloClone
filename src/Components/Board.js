import React, { useState } from 'react'
import './Board.css'
import List from './List'

const Board = ({project}) => {

    const [listTitle, updateListTitle] = useState("")
    const [lists, updateLists] = useState([]);

    const onClick = () => {
        updateLists( arr => [...arr, `${listTitle}`]);
    };

    return(
        <div className="board-container">
            <h1 className="board-projectname">{project}</h1>
            <div className="list-container">
                {
                    lists.map( e => <List title={e}/>
                )}
                <div className='list-create'>
                    <input type="text" onChange={e => updateListTitle(e.target.value)}/>
                    <input type="button" onClick={ onClick } value="Create List" />
                </div>
            </div>
        </div>
    )
}

export default Board;