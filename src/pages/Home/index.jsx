import React, { Component } from 'react'
import {Redirect,Route} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'
export default class Home extends Component {
  render() {
    return (
      <div>
        我是Home
        <div>
          <ul class="nav nav-tabs">
            <li>
              {/* <a class="list-group-item" href="./home-news.html">News</a> */}
               <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              {/* <a class="list-group-item active" href="./home-message.html">Message</a> */}
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          <div>
            {/* 注册路由 显示内容区域 */}
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            <Redirect to="/home/news"></Redirect>
          </div>
        </div>
      </div>
    )
  }
}
