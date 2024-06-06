import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import DataManager from "./components/home/DataManager";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ProtectedRoute from "./routes/ProtectedRoute";
import UnprotectedRoutes from "./routes/UnprotectedRoutes";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/user",
          element: <Home />,
          children: [
            {
              path: "data-manager",
              element: <DataManager />,
            },
            {
              path: "/user/*",
              element: <div>No page available</div>,
            },
          ],
        },
      ],
    },
    {
      path: "/auth",
      element: <UnprotectedRoutes />,
      children: [
        {
          path: "signup",
          element: <Auth mode="signup" />,
        },
        {
          path: "signin",
          element: <Auth mode="signin" />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/auth/signin" />,
    },
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />;
        <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
