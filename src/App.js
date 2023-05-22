import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css';


import React, { Component } from 'react'

export default class App extends Component {
  state = {
    todos:[
      {id:1,name:'吃饭',done:true},
      {id:2,name:'睡觉',done:false},
      {id:3,name:'打代码',done:true},
    ]
  }
  //添加一条数据
  addTodos = (todosObj)=> {
    console.log(todosObj,"todosObj");
    const newTodos = [todosObj,...this.state.todos]
    // if(todosObj != Object) return
    this.setState({
      todos:newTodos
    })
  }
  //根据id改变状态
  updateTodos = (id,done)=> {
    const newTodoObj =  this.state.todos.map(todoObj => {
      if(todoObj.id === id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodoObj})
  }
  //删除todo
  deleteTodos = (id)=> {
   const newTodoObj =  this.state.todos.filter(todoObj => {
      return todoObj.id !== id
    })
    this.setState({todos:newTodoObj})
  }
  //全选
  changeAllDone =(done)=> {
   const newTodoObj =  this.state.todos.map(todos => {
    return {...todos,done}
   })
   this.setState({todos:newTodoObj})
  }
  //清除已完成
  clearDone =() => {
   const newTodoObj =  this.state.todos.filter(todos => !todos.done)
   this.setState({todos:newTodoObj})
  }
  render() {
    const {todos} = this.state
    return (
     
      <div>
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodos={this.addTodos} todos={todos}></Header>  {/* addTodos:传给子组件的值（是个函数）*/}
          <List todos={todos} updateTodos={this.updateTodos} deleteTodos={this.deleteTodos}></List>
          <Footer todos={todos} changeAllDone={this.changeAllDone} clearDone={this.clearDone}></Footer>
        </div>
      </div>
    </div>
    )
  }
}

