import React from "react";
import { Helmet } from "react-helmet";

import "./../styles/global.scss";
import IndexPage from "./index";
import DashPage from "./dash";
import PrivacyPage from "./privacy";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import "./../util/analytics.js";

function App(props) {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>BroRender - Free Distributed Render by BroCorp</title>
        <link rel="canonical" href="https://brorender.site" />
        <meta name="author" content="BroCorp" />
        <meta
          name="keywords"
          content="Blender, render, distributed, free, online, distributed"
        />
        <meta
          name="description"
          content="Render your blender projects in realtime with our distributed cluster."
        />
        <meta
          name="og:description"
          content="Render your blender projects in realtime with our distributed cluster."
        />
        <meta
          name="og:title"
          content="BroRender - Free Distributed Render by BroCorp"
        />
        <meta name="og:image" content="https://brorender.site/img/logo.png" />
      </Helmet>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/brorender-site/" component={IndexPage} />
        <Route exact path="/privacy" component={PrivacyPage} />
        <Route path="/dash" component={DashPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
