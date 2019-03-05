import React from 'react';

const Item = props =>
    <pre
        id={props.i}
        className={'item' + (props.item.completed ? ' complete' : '')}
        onClick={props.click}
    >
        {props.item.value}
    </pre>
export default Item