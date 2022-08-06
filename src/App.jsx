import { NavLink,useRoutes} from "react-router-dom";
import routesArr from "./Routes";
import Header from "./pages/Header";

import "./app.css";

export default function App() {
  const element = useRoutes(routesArr)
  return (
    <div id="rr6">
      <Header/>
      <div className="row">
        <div className="col-xs-offset-3 col-xs-8">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className="list-group-item" to="/about">
              About
            </NavLink>
            <NavLink className="list-group-item" end to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-xs-4">
          <div className="panel rr7">
            <div className="panel-body">
              {/* 注册路由 */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
