import React from 'react';

const Item = props => {
    return (
        <div className='item'>
            <div className='checkbox'>
                <pre>{(props.item.completed ? 'x' : '')}</pre>
            </div>
            <pre
                id={props.id}
                className={'item-text' + (props.item.completed ? ' complete' : '')}
                onClick={props.click}
                >
                {props.item.value}
            </pre>
        </div>
    )
}

export default Item