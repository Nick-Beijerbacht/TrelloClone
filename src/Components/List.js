import React, { useState } from 'react'
import Card from './Card'

const List = ({title}) => {

    const [cardTask, updateCardTask] = useState("")
    const [cards, updateCards] = useState([]);

    const onClick = () => {
        updateCards( arr => [...arr, `${cardTask}`]);
    };
    return (
        <div>
            <h3>{title}</h3>
            <input type="text" onChange={e => updateCardTask(e.target.value)}/>
            <input type="button" onClick={ onClick } value="Create Card" />
            <div>{cards.map( e =>
                <Card task={e}/>
            )}
            </div>
        </div>
    )
}

export default List;