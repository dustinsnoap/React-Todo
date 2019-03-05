import React from 'react';

const TodoForm = props => {
    return (
        <div className='input-form'>
            <input 
                value={props.value}
                type='text'
                placeholder='karate chop'
                onChange={props.change}/>
            <button onClick={props.add}>Add Todo</button>
            <button onClick={props.clear}>Clear Completed</button>
        </div>
    )
}

export default TodoForm