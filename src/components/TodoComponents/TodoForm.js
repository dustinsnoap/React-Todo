import React from 'react';

const TodoForm = props => {
    return (
        <div className='input-form'>
            <input 
                value={props.value}
                type='text'
                placeholder='new item'
                onChange={props.change}/>
            <div className='buttons'>
                <button onClick={props.add}>Add</button>
                <button onClick={props.clear}>Clear</button>
            </div>
        </div>
    )
}

export default TodoForm