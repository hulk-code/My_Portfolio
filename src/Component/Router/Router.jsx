import { createBrowserRouter } from "react-router-dom";
import Home from "../Routes/Home/Home";
import ErrorPage from "../Routes/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
       
      ],
  },
]);

export default router;
