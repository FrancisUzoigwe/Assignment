import { createBrowserRouter } from "react-router-dom";
import Landingpage from "../Pages/Auth/Landingpage";
import Signin from "../Pages/Auth/Signin";
import Signup from "../Pages/Auth/Signup";
import PrivateRouter from "../Router/PrivateRouter"
import Home from "../Pages/Home/Home";
import Signuppage from "../Pages/Auth2/Signuppage";
import SigninPage from "../Pages/Auth2/SigninPage";
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
      }
    ],
  },
  {
    element: <Signin />,
    path: "/signin",
  },{
    element: <Main/>,
    path: "/home"
  },
  {
    element: <Signup />,
    path: "/signup",
  },{
    element: <Signuppage/>,
    path: "/signuppage"
  }, {
    element: <SigninPage/>,
    path: "/signinpage"
  }
]);
