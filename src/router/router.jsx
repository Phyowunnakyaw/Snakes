import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import Layout from "../pages/layout/layout"
  import Home from "../pages/Home";
  import Detail from "../pages/Detail";
  import Snakes from "../pages/Snakes";
import SnakesDetail from "../pages/SnakesDetail";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
            path: "/",
            element: <Home />,
        
        },
        {
            path: "/detail",
            element: <Detail />
        },
        {
            path: "/snakes",
            element: <Snakes />
        },
        {
            path: "/snakes/:id",
            element: <SnakesDetail />
        }
      ]
    },
  ]);

export default router;