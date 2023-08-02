import { createBrowserRouter } from "react-router-dom";
import Landingpage from "../Pages/Auth/Landingpage";
import Signin from "../Pages/Auth/Signin";
import Signup from "../Pages/Auth/Signup";
import PrivateRouter from "../Router/PrivateRouter"
import Home from "../Pages/Home/Home";
import Main from "../Pages/Home/Main";

export const mainRoute = createBrowserRouter([
  {
    element: <PrivateRouter>
      <Landingpage />
    </PrivateRouter>,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
    ],
  },
  {
    element: <Signin />,
    path: "/signin",
  },
  {
    element: <Signup />,
    path: "/signup",
  },
  {
    element: <Main/>,
    path: "/home"
  }
]);
