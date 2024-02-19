import React from "react";
import Login from "./Login";
import Browser from "./Browser";
import { createBrowserRouter } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },

    {
      path: "/Browser",
      element: <Browser />,
    },
  ]);

  return (
    <div>
      <Login />
      <Browser />
    </div>
  );
};

export default Body;
