import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";

import GraphicPage from "./pages/GraphicPage";
import Home from "./pages/Home";
import AboutPage from "./pages/About";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/graphics">
          <GraphicPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
