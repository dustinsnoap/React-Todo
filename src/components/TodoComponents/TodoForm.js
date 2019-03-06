import React from 'react';

class TodoForm extends React.Component {
    h_keyUp = event => {
        if(event.key === 'Enter') this.props.add(event)
    }
    render() {
        return (
            <div className='input-form'>
                <input 
                    value={this.props.value}
                    type='text'
                    placeholder='new item'
                    onChange={this.props.change}
                    onKeyUp={this.h_keyUp}/>
                <div className='buttons'>
                    <button onClick={this.props.add}>Add</button>
                    <button onClick={this.props.clear}>Clear</button>
                </div>
            </div>
        )
    }
}

export default TodoForm