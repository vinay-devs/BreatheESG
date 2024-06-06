import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import DataManager from "./components/home/DataManager";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/user/data-manager",
          element: <DataManager />,
        },
        {
          path: "/user/*",
          element: <div>Hello</div>,
        },
      ],
    },
    {
      path: "/signup",
      element: <Auth mode="signup" />,
    },
    {
      path: "/signin",
      element: <Auth mode="signin" />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
