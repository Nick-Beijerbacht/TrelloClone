import React, { useState } from 'react'
import List from './List'

const Board = ({project}) => {

    const [listTitle, updateListTitle] = useState("")
    const [lists, updateLists] = useState([]);

    const onClick = () => {
        updateLists( arr => [...arr, `${listTitle}`]);
    };

    return(
        <div>
            <h1>Test board</h1>
            <input type="text" onChange={e => updateListTitle(e.target.value)}/>
            <input type="button" onClick={ onClick } value="Create" />
            <div>{lists.map( e =>
                <List title={e}/>
            )}
            </div>
        </div>
    )
}

export default Board;