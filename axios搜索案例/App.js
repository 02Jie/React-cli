import React, { Component } from "react";
import Search from "./components/Search";
import List from "./components/List";
export default class App extends Component {
  //定义一个数组对象接收数据
  state = {
    infoArr:[]
  }
  handleData = (arr) => { 
    console.log(arr);
    this.setState({infoArr:[...arr]})
  }
  render() {
    const { infoArr } = this.state 
    return (
        <div className="container">
        <Search handleData={this.handleData }></Search>
        <List infoArr={ infoArr }></List>
        
        </div>
    );
  }
}
