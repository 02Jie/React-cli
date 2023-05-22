import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
   //搜索
   handleSearch=()=> { 
     console.log(this.keyWordElement, "@@@");
     const { keyWordElement: { value: data} } = this    //value:data 表示value重新命名为data
    //  axios.get(`http://localhost:5000/search/users?q=${data}`).then(res => { 
      axios.get(`https://api.github.com/search/users?q=${data}`).then(res => { 
       console.log(res,"res===");
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
