import React from "react";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Watch from "./pages/Watch";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [],
    },
    { path: "/watch", element: <Watch /> },
  ]);
  return (
    <div className="text-slate-700 w-screen h-screen relative">
      <Header />
      <div className="flex pt-20 h-full">
        <Sidebar />
        <Outlet />
        <RouterProvider router={route} />
      </div>
    </div>
  );
};

export default App;
