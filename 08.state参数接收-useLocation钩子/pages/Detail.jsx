import React from "react";
import {useLocation} from "react-router-dom";

export default function Detail() {
  //  接收前端发送的url 参数：函数式组件应用钩子： useLocation()

  const a= useLocation()
  console.log(a) // a 是个对象，里面有个属性叫 state,state里就是传递过来的state对象
  const {id,title,content}=a.state

  return (
    <ul>

      <li>消息编号：{id}</li>
      <li>消息标题：{title}</li>
      <li>消息内容：{content}</li>
    </ul>
  );
}
