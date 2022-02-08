import React, { useState } from 'react'
import './List.css'
import Card from './Card'

const List = ({title}) => {

    const [cardTask, updateCardTask] = useState("")
    const [cards, updateCards] = useState([]);

    const onClick = () => {
        updateCards( arr => [...arr, `${cardTask}`]);
    };

    return (
        <div className="list">
            <h3 className='list-title'>{title}</h3>
            <div className="card-container">
                    {            
                        cards.map( e =>
                        <Card task={e}/>
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