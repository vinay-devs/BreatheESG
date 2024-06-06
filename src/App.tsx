import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import DataManager from "./components/home/DataManager";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ProtectedRoute from "./routes/ProtectedRoute";

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
              element: <div>Hello</div>,
            },
          ],
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
