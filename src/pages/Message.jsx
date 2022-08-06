import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Message() {
  const [messages] = useState({
    messages: [
      { id: "01", title: "message1", content: "Liyi" },
      { id: "02", title: "message2", content: "Philip" },
      { id: "03", title: "message3", content: "Love" },
      { id: "04", title: "message4", content: "Regina" },
    ],
  });
  //  点击按钮的回调函数，用来跳转到消息详情，利用钩子： .useNavigate()
  const navigate = useNavigate();
  const show = (e) => {
    // navigate()可以传递两个参数，第一个是路径，第二个是配置对象，配置对象可以包含以下属性：replace,state等
    navigate("detail", {
      replace: true,
      state: { id: e.id, title: e.title, content: e.content },
    });
  };
  return (
    <div>
      <ul>
        {messages.messages.map((e) => {
          return (
            <li key={e.id}>
              {/* Link 也是传参的位置： */}
              <Link
                to="detail"
                state={{ id: e.id, title: e.title, content: e.content }}
              >
                {" "}
                {e.title}
              </Link>
              <button style={{"margin-left":"20px"}}onClick={() => show(e)}>点击查看详情</button>
            </li>
          );
        })}
      </ul>
      <hr />
      {/* 释放子级路由的显示 */}
      <Outlet />
    </div>
  );
}
