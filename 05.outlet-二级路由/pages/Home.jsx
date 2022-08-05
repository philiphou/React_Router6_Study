import { NavLink,Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h4>我是Home的内容</h4>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="news">
              News
            </NavLink>
          </li>&nbsp;
          <li>
            <NavLink className="list-group-item" to="message">
              Messages
            </NavLink>
          </li>
        </ul>
        {/* 指定二级路由组件呈现位置 */}
        <Outlet/>
      </div>
    </div>
  );
};

export default Home;
