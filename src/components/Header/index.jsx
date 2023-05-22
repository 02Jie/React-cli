import React, { Component } from 'react'
// import nanoid from 'nanoid'
import './index.css'

export default class Header extends Component {
 
  handleTodos = (event)=> {   
    const {key,target} = event
    if(target.value==='') {
        alert('内容不能为空')
        return
    }
    if(key !== 'Enter') return
    // const todosObj = {id:nanoid(),name:target.value,done:false}
    const todosObj = {id:new Date().toString(),name:target.value,done:false}
    this.props.addTodos(todosObj)
    target.value = ''
  }
  render() {
    return (
        <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleTodos}/>
      </div>
    )
  }
}
