import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";

import GraphicPage from "./pages/GraphicPage";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CompetitionPage from "./pages/Competition";
import PracticePage from "./pages/Practice";

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
        <Route path="/practice">
          <PracticePage />
        </Route>
        <Route path="/competition">
          <CompetitionPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
