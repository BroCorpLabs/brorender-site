import React from "react";
import "./../styles/global.scss";
import IndexPage from "./index";
import DashPage from "./dash";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import "./../util/analytics.js";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={IndexPage} />

        <Route path="/dash" component={DashPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
