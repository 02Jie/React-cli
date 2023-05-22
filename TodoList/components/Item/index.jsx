import React, { Component } from 'react'

export default class Item extends Component {
    state = {
        mouse:false
    }
    handleMouse =(flag)=> {
      return ()=> {
        this.setState({mouse:flag})
      }  
    }
    //点击复选框进行的操作
    handleCheck= (id)=> {
      return (event)=> {
        const {updateTodos} = this.props
        console.log(event.target.checked,id,"event");
        updateTodos(id,event.target.checked)
      }
    }
    handleDelte =(id)=> {
        console.log(id,"id====");
       if(window.confirm('确定删除吗')){
        const {deleteTodos} = this.props
        deleteTodos(id)
       }
    }
  render() {
    const {name,done,id} = this.props
    const {mouse} = this.state
    return (
      <div>
         {
            <li style={{background:mouse ? '#ccc' : '#fff'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
            <label>
              <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
              <span>{name}</span>
            </label>
            <button className="btn btn-danger" onClick={()=>this.handleDelte(id)} style={{display:mouse ? 'block':'none'}}>删除</button>
          </li>
         }
      </div>
    )
  }
}
