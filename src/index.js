import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Transaction from "./components/Transaction";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Profile from "./components/Profile";
import AllUsers from "./components/AllUsers";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <App />
        <Footer />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Nav />
        <Login />
        <Footer />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Nav />
        <Register />
        <Footer />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Nav />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/transactions",
    element: (
      <>
        <Nav />
        <Transaction />
        <Footer />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Nav />
        <Profile />
        <Footer />
      </>
    ),
  },
  {
    path: "/allUsers",
    element: (
      <>
        <Nav />
        <AllUsers />
        <Footer />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </React.StrictMode>
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
