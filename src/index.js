import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import SalatoPage from "./pages/Salato/SalatoPage";
import DolcePage from "./pages/Dolce/DolcePage";
import FestaPage from "./pages/Festa/FestaPage";
import BevandaPage from "./pages/Bevanda/BevandaPage";
const mediaQuery = window.matchMedia("(min-width: 768px)");
function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log("Media Query Matched!");
  }
}
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "salato",
    element: <SalatoPage />,
  },

  {
    path: "dolce",
    element: <DolcePage />,
  },

  {
    path: "festa",
    element: <FestaPage />,
  },
  {
    path: "bevande",
    element: <BevandaPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
