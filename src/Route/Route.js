import { createBrowserRouter } from "react-router-dom";
import DetailPage from "../Pages/DetailPage/DetailPage";
import Home from "../Pages/Home/Home";
import Main from "../Pages/layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/:id",
        element: <DetailPage></DetailPage>,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-one-self.vercel.app/allproject/${params.id}`
          ),
      },
    ],
  },
]);
