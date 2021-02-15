import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/home/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <div className="background">
        <div className="rick-back"></div>
      </div>
      <Route component={Home} path="/" exact />
    </BrowserRouter>
  );
};

export default Routes;
