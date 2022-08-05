import React from "react";
import { useSearchParams,useLocation } from "react-router-dom";

export default function Detail() {
  //  接收前端发送的url 参数：函数式组件应用钩子： .useSearchParams()
//   useSearchParams() 钩子先解构得到 search, 然后通过search 的 api 中的 .get() 方法读取内容
  const [search,setSearch]=useSearchParams()
  console.log(search.get('id')) // 输出 id
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')
  const change=()=>{
    setSearch('id=007&title=haha&content=xixixi')
  }
  const b=useLocation()
  console.log(b) // 输出 location 对象，里面有个 search属性，属性值就储存了 url 携带来的 search params: ?id=xx&title=xx&content=xx
  return (
    <ul>
        <li>
            <button onClick={change}>
                点我更新search参数
            </button>
        </li>
      <li>消息编号：{id}</li>
      <li>消息标题：{title}</li>
      <li>消息内容：{content}</li>
    </ul>
  );
}
