import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Landing, Login, Dashboard } from "./screens";
import { ROUTES } from "./assets";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={ROUTES.landing} exact component={Landing} />
          <Route path={ROUTES.login} exact component={Login} />
          <Route path={ROUTES.dashboard} exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
