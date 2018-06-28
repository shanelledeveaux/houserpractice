import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Wizard from "./components/Wizard/Wizard";
import Wizard2 from "./components/Wizard/Wizard2";
import Wizard3 from "./components/Wizard/Wizard3";

export default (
  <Switch>
    <Route component={Dashboard} exact path="/" />
    <Route component={Wizard} exact path="/wizard" />
    <Route component={Wizard2} exact path="/wizard2" />
    <Route component={Wizard3} exact path="/wizard3" />
  </Switch>
);
