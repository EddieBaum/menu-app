import "./App.css";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import Homepage from "./Homepage/Homepage";
import EnglishMenu from "./Menus/EnglishMenu";
import SpanishMenu from "./Menus/SpanishMenu";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Homepage />} />
        <Route path="/english-menu" element={<EnglishMenu />} />
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
    <div>
      <Outlet />
    </div>
  );
};

export default App;
