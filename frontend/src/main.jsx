import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Photo from "./Photo";
import Image1 from "./Image1";
import Image2 from "./Image2";
import Image3 from "./Image3";
import Looks from "./Looks";
import Look1 from "./Look1";
import Look2 from "./Look2";
import Look3 from "./Look3";
import Routine from "./Routine";
import Panier from "./Panier";


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
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
