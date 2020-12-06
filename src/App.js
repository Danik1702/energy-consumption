import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Landing } from "./screens";
import { ROUTES } from "./assets";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path={ROUTES.landing} exact component={Landing} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
