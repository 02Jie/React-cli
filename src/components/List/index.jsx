import React, { Component } from 'react'
import Item from '../Item'
import './index.css'
export default class List extends Component {
  render() {
    const {todos,updateTodos,deleteTodos} = this.props
    return (
      <div>
           <ul className="todo-main">
             {
                todos.map(todo => {
                   return <Item {...todo} key={todo.id} updateTodos={updateTodos} deleteTodos={deleteTodos}></Item>
                })
             }
          </ul>
      </div>
    )
  }
}
