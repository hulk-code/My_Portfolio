import { createBrowserRouter } from "react-router-dom";
import Home from "../Routes/Home/Home";
import ErrorPage from "../Routes/ErrorPage/ErrorPage";
import AboutMe from "../Routes/AboutMe/AboutMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
     
      ],
  },
  {
    path: "/aboutMe",
    element:<AboutMe></AboutMe> ,
  },
]);

export default router;
