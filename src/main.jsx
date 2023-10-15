import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Components/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import { firebaseConfig } from "./utils/firebaseConfig";
import FirebaseProvider from "react-firebase-auth-hook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider config={firebaseConfig}>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);