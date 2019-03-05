// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Item from './Todo'

const TodoList = props => {
    console.log(props)
    return (
        <div className='thelist'>
            {props.items.map((item, i) => {return <Item item={item} click={props.click} i={i} key={i} />})}
            {/* {props.list.map((item, i) => {return <Item item={item} key={i}/>})} */}
        </div>
    )
}

export default TodoList
