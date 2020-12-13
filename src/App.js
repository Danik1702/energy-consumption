import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import {
  Landing,
  Login,
  Dashboard,
  About,
  Graph,
  Prognosis,
  Prognostication,
} from "./screens";
import { ROUTES } from "./assets";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={ROUTES.landing} exact component={Landing} />
          <Route path={ROUTES.login} exact component={Login} />
          <Route path={ROUTES.dashboard} exact component={Dashboard} />
          <Route path={ROUTES.aboutUs} exact component={About} />
          <Route path={ROUTES.aboutEnergy} exact component={About} />
          <Route
            path={ROUTES.prognostication}
            exact
            component={Prognostication}
          />
          <Route path={ROUTES.prognosticationGraph} exact component={Graph} />
          <Route path={ROUTES.results} exact component={Prognosis} />
          <Route path={ROUTES.usersResults} exact component={Prognosis} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
