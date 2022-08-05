import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState({ sum: 0 });
  const add = () => {
    setState({ sum: state.sum + 1 });
  };
  return (
    <div>
      <h4>我是Home的内容</h4>
      {state.sum > 5 ? (
        <Navigate replace to="/about" /> // Navigate 可以加个属性 replace 是替换模式，默认是push 模式
      ) : (
        <p> 当前的 Sum 值是： {state.sum}</p>
      )}

      <button onClick={add}>点我+1</button>
    </div>
  );
};

export default Home;
