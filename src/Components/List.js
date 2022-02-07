import React from 'react'
import Card from './Card'

const List = ({title}) => {
    return (
        <div>
            <h3>{title}</h3>
            <Card task="Test task"/>
        </div>
    )
}

export default List;