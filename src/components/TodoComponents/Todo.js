import React from 'react';

const Item = props => {
    return (
        <div
            id={props.id}
            className={'item' + (props.item.completed ? ' complete' : '')}
            onClick={props.click.parent}
        >
            <pre className='checkbox' onClick={props.click.child}>
                {(props.item.completed ? 'x' : '')}
            </pre>
            <pre className='item-text' onClick={props.click.child}>
                {props.item.value}
            </pre>
        </div>
    )
}

export default Item