import React from 'react'
import Item from './Todo'

const TodoList = props => {
    return (
        <div className='items'>
            {props.items.map((item, i) => {return <Item item={item} click={props.click} id={i} key={i} />})}
        </div>
    )
}

export default TodoList