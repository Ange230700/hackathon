import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Photo from "./pages/Photo";
import Image1 from "./pages/Image1";
import Image2 from "./pages/Image2";
import Image3 from "./pages/Image3";
import Looks from "./pages/Looks";
import Look1 from "./pages/Look1";
import Look2 from "./pages/Look2";
import Look3 from "./pages/Look3";
import Routine from "./pages/Routine";
import Panier from "./pages/Panier";
import "./sass/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Form1 />,
      },
      {
        path: "/form2",
        element: <Form2 />,
      },
      {
        path: "/photo",
        element: <Photo />,
      },
      {
        path: "/image1",
        element: <Image1 />,
      },
      {
        path: "/image2",
        element: <Image2 />,
      },
      {
        path: "/image3",
        element: <Image3 />,
      },
      {
        path: "/looks",
        element: <Looks />,
      },
      {
        path: "/look/1",
        element: <Look1 />,
      },
      {
        path: "/look/2",
        element: <Look2 />,
      },
      {
        path: "/look/3",
        element: <Look3 />,
      },
      {
        path: "/routine",
        element: <Routine />,
      },
      {
        path: "/panier",
        element: <Panier />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
