import React from 'react'
import{useParams,useMatch}from 'react-router-dom'

export default function Detail() {
    //  接收前端发送的url 参数：函数式组件应用钩子： .useParams()
    const a = useParams()
    console.log(a) 
    const {id,title,content}=a
    const b = useMatch('/home/message/detail/:id/:title/:content')
    console.log(b)
  return (
   <ul>
    <li>消息编号：{id}</li>
    <li>消息标题：{title}</li>
    <li>消息内容：{content}</li>
   </ul>
  )
}
