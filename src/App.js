import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './reset.css'
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
  h_toggleComplete = event => {
    let items = this.state.items
    items[event.target.id].completed = !items[event.target.id].completed
    this.setState({items: items})
  }
  h_inputChange = event => {
    this.setState({value: event.target.value})
  }
  h_clearCompleted = event => {
    this.setState({
      items: this.state.items.filter(item => !item.completed),
      value: '',
    })
  }
  h_addItem = event => {
    event.preventDefault()
    if(this.state.value === '') return
    let newItem = {
      value: this.state.value,
      completed: this.state.completed,
    }
    this.setState(prevState => {
      return {
        items: [...prevState.items, newItem],
        value: '',
      }
    })
  }
  render() {
    return (
      <div className='app'>
        <h1>To Do List:</h1>
        <TodoList items={this.state.items} click={this.h_toggleComplete}/>
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