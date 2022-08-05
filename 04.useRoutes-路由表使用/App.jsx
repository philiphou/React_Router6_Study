import { NavLink,useRoutes} from "react-router-dom";
import routesArr from "./Routes";

import "./app.css";

export default function App() {
  const element = useRoutes(routesArr)
  return (
    <div id="rr6">
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router 6 Demo</h2>
            <hr />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-3 col-xs-8">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className="list-group-item" to="/about">
              About
            </NavLink>
            <NavLink className="list-group-item" to="/home">
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
