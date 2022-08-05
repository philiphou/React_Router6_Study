import { NavLink, Routes, Route,Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import './app.css'

export default function App() {
  function addClassName({isActive}){
    return isActive?"list-group-item atguigu":"list-group-item"
  }
  return (
    <div id="rr6">
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router 6 Demo</h2>
            <hr/>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-3 col-xs-8">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className={addClassName} to="/about">
              About
            </NavLink>
            <NavLink className={addClassName} to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-4">
          <div className="panel rr7">
            <div className="panel-body">
              {/* 注册路由 */}
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/about"/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
