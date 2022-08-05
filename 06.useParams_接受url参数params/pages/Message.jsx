import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Message() {
  const [messages] = useState({
    messages: [
      { id: "01", title: "message1", content: "Liyi" },
      { id: "02", title: "message2", content: "Philip" },
      { id: "03", title: "message3", content: "Love" },
      { id: "04", title: "message4", content: "Regina" },
    ],
  });
  return (
    <div>
      <ul>
        {messages.messages.map((e) => {
          return (
            <li key={e.id}>
              <Link to={`detail/${e.id}/${e.title}/${e.content}`}> {e.title}</Link>
            </li>
          );
        })}
      </ul>
      <hr/>
      {/* 释放子级路由的显示 */}
      <Outlet/>
    </div>
  );
}
