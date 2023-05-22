import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    handleChangeAllDone = (event)=> {
        this.props.changeAllDone(event.target.checked)
    }
    handleClear =()=> {
        this.props.clearDone()
    }
    render() {
        const {todos} = this.props
        //已完成
        const done = todos.filter(i => i.done).length
        //总数
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"  checked={done && done===total ? true : false} onChange={this.handleChangeAllDone}/>
                </label>
                <span>
                    <span>已完成{done}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.handleClear}>清除已完成任务</button>
            </div>
        )
    }
}
