import "./App.css";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Router, Link, Outlet } from "react-router-dom";
import React from "react";
import Homepage from "./Homepage/Homepage";
import Menu from "./Menus/Menu";
import SpanishMenu from "./Menus/SpanishMenu";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path='/menu-app' element={<Homepage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/spanish-menu" element={<SpanishMenu />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  return (
    <div id="Root">
      <Outlet />
    </div>
  );
};

export default App;
