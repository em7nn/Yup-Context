import { createBrowserRouter } from "react-router-dom";

import LoginMain from "../LoginMain";
import { Register } from "../register";




const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginMain/>
    },
    {
      path: "/register",
      element: <Register/>
    }
  ])

  export default router