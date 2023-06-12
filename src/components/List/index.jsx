import React, { Component } from 'react'
import PubSub from 'pubsub-js'  
import './index.css'

export default class List extends Component {
  
  render() {
    const { infoArr } = this.props
    console.log(infoArr,"infoArr===");
    console.log(typeof infoArr, "infoArr===");
   
    const imgUrl = infoArr.map(element => {
      return element.avatar_url
    });
    console.log(imgUrl, "imgUrl");
    

    //订阅(接收信息)
  const token =   PubSub.subscribe('accept',(_,data)=>{
      console.log(data,"@data");
    })
    
    //取消订阅（避免不必要的通知）
  //   return () => {
  //     PubSub.unsubscribe(token);
  //   };
  // }, []);


    return (
      <div>
        
        {
          
          infoArr.map(item => { 
            return <div className="row" key={item.id}>
               
            <div className="card">
                <a rel='noreferrer' href={ item.html_url} target="_blank">
                <img
                    src={item.avatar_url } alt="head_pic"
                  style={{width:'100px'}}
                />
              </a>
                <p className="card-text">{ item.avatar_url }</p>
            </div>
          </div>
          })
        }

      </div>
    //   <div className="row">
    //   <div className="card">
    //     <a rel='noreferrer' href="https://github.com/reactjs" target="_blank">
    //       <img
    //         src="https://avatars.githubusercontent.com/u/6412038?v=3" alt="head_pic"
    //         style={{width:'100px'}}
    //       />
    //     </a>
    //     <p className="card-text">reactjs</p>
    //   </div>
    // </div>
    )
  }
}
