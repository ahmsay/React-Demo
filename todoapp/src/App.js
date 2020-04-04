import React, { Component } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={ Home }/>
          <Route path='/about' component={ About }/>
          <Route path='/contact' component={ Contact }/>
          <div className="container">
            <h1 className="center blue-text">Todo's</h1>
            <Todos todos={ this.state.todos } deleteTodo={ this.deleteTodo }/>
            <AddTodo addTodo={ this.addTodo }/>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App