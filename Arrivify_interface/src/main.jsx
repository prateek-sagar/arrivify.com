import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login_modal from "./pages/components/Login_modal";
import CheckInModal from "./pages/components/CheckInModal";
import Logout from "./pages/components/Logout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login_modal />,
  },
  { path: "/checkin", element: <CheckInModal /> },
  { path: "/logout", element: <Logout /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
