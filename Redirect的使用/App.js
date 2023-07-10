import React, { Component } from "react";
import {NavLink,Route,Redirect} from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
  render() {    
    return (
      <div>
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><h2>React Router Demo</h2></div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
          {/* <a className="list-group-item active" href="./about.html">About</a>
          <a className="list-group-item" href="./home.html">Home</a> */}
          {/* <NavLink activeClassName='demo' to='/about'>我是about</NavLink>
          <NavLink activeClassName='demo' to='/home'>我是home</NavLink> */}
          <MyNavLink to="/about" children="about"/> 
          <MyNavLink to="/home" children="home"/> 
          <Redirect to="/about"/>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            <Route path='/about' component={About}></Route>
            <Route path='/home' component={Home}></Route>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}
