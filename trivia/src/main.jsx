import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/login/Login.jsx";
import { Match } from "./pages/match/Match.jsx";
import { Home } from "./pages/home/Home.jsx";
import "animate.css/animate.min.css";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/match",
        element: <Match />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
);
