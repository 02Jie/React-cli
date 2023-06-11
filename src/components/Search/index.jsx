import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  //定义一个数组对象接收数据
  state = {
    infoArr:[]
  }
   //搜索
  handleSearch = () => { 
     console.log(this.keyWordElement, "@@@");
     const { keyWordElement: { value: data} } = this    //value:data 表示value重新命名为data
    const { handleData } = this.props
    //  axios.get(`http://localhost:5000/search/users?q=${data}`).then(res => { 
      axios.get(`https://api.github.com/search/users?q=${data}`).then(res => { 
        console.log(res.data.items, "res===");
          //接收数据
          handleData(res.data.items)
         
     }).catch(err => { 
       alert('请求出错')
     })
  }

  render() {
    return (
      <div>
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={c => this.keyWordElement = c}/>&nbsp;
            <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    </div>
    )
  }
}
