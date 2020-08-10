import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import routesConfig from "../../config/routesConfig";

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routesConfig.map((routeConfig, index) => {
          return (
            <Route
              key={index}
              path={routeConfig.route}
              component={routeConfig.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
};

export default Routes;
