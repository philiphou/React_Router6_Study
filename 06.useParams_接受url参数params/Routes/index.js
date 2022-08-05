import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import News from "../pages/News";
import Detail from "../pages/Detail";

const routesArr = [
  { path: "/about", element: <About /> },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "message",
        element: <Message />,
        children: [{ path: "detail/:id/:title/:content", element: <Detail /> }],
      },
      { path: "news", element: <News /> },
    ],
  },
  { path: "/", element: <Navigate to="/about" /> },
];
export default routesArr;
