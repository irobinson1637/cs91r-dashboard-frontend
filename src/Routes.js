import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Events from "./containers/Events";
import newVolunteer from "./containers/newVoluneer";
import Dashboard from "./containers/Dashboard";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/events" exact component={Events} />
    <Route path="/signup" exact component={newVolunteer} />
    <Route path="/dash" exact component={Dashboard} />

    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;