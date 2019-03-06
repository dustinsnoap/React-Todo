import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './reset.css'
import './index.css'
//import './BobRoss.react'

class App extends React.Component {
  // this is your world, you're the creator, find freedom on this canvas
  constructor() {
    super()
    this.state = {
      items: [],
      value: '',
      completed: false,
    }
  }
  componentDidMount() {
    // believe that you can do it cause you can do it
    if(localStorage.hasOwnProperty('items')) {
      // we don't load mistakes, just happy little accidents
      this.setState({items: JSON.parse(localStorage.getItem('items'))})
    }
  }
  h_toggleComplete = event => {
    // let's put a nice big strong x on the list
    let items = this.state.items
    items[event.target.id].completed = !items[event.target.id].completed
    this.setState({items: items})
  }
  h_inputChange = event => {
    // talent is a pursued interest, anything that you're willing to type can be displayed
    this.setState({value: event.target.value})
  }
  h_clearCompleted = event => {
    // what can be painted can be punished
    this.setState(prevState => {
      let items = prevState.items.filter(item => !item.completed)
      localStorage.setItem('items', JSON.stringify(items))
      return {
        items: items,
        value: '',
      }
    })
  }
  h_addItem = event => {
    // let's build a happy little list item
    if(this.state.value === '') return
    let newItem = {
      value: this.state.value,
      completed: this.state.completed,
    }
    this.setState(prevState => {
      let items = [...prevState.items, newItem]
      // let's save a happy little list item
      localStorage.setItem('items', JSON.stringify(items))
      return {
        items: items,
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