// import { StrictMode } from "react";
import React from "react";
// import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./components/App.css";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Services from "./components/Services.jsx";
// import About from "./components/About.jsx";
// import SideBar from "./components/SideBar.jsx";
// import MainPage from "./components/MainPage.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   // {
//   //   path: "/sidebar",
//   //   element: <SideBar />,
//   // },
//   {
//     path: "/services",
//     element: <Services />,
//   },
//   {
//     path: "/mainpage",
//     element: <MainPage />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
