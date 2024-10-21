import React from "react";
import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Watch from "./pages/Watch";
import MainBody from "./Components/MainBody";
import Home from "./pages/Home";
import Results from "./pages/Results";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="text-slate-700 w-screen h-screen relative dark:bg-black dark:text-white">
          <Header />
          <MainBody />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        { path: "/watch", element: <Watch /> },
        { path: "/results", element: <Results /> },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
};

export default App;
