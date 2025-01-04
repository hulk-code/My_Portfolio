import { createBrowserRouter } from "react-router-dom";
import Home from "../Routes/Home/Home";
import ErrorPage from "../Routes/ErrorPage/ErrorPage";

import Education from "../Routes/Education/Education";
import AboutMe from "../Routes/AboutMe/AboutMe";
import Service from "../Routes/Service/Service";

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
  {
    path: "/education",
    element:<Education></Education> ,
  },
  {
    path: "/service",
    element:<Service></Service> ,
  },
  
]);

export default router;
