import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './index.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
      value: '',
      completed: false,
    }
  }
  h_setComplete = event => {
    this.state.items[event.target.id].completed = true
  }
  h_inputChange = event => {
    this.setState({value: event.target.value})
  }
  h_clearCompleted = () => {
    this.setState({
      items: this.state.items.filter(item => !item.completed),
      value: '',
      completed: false,
    })
    console.log(this.state.items)
  }
  h_addItem = event => {
    event.preventDefault()
    let newItem = {
      value: this.state.value,
      completed: this.state.completed,
    }
    this.setState(prevState => {
      return {
        items: [...prevState.items, newItem],
        value: '',
        completed: false,
      }
    })
  }
  render() {
    return (
      <div className='todoapp'>
        <h1>Todo List: MVP</h1>
        <TodoList items={this.state.items} click={this.h_setComplete}/>
        <TodoForm 
          value={this.state.value}
          add={this.h_addItem}
          clear={this.h_clearCompleted}
          change={this.h_inputChange}/>
      </div>
    );
  }
}

export default App;