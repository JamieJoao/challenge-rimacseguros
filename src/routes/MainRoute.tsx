import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { routeNames } from '../constants';
import { HomeView } from "../views/Home";
import { CarDataView } from "../views/CarData";
import { PlanBuildView } from "../views/PlanBuild";
import { ThanksView } from "../views/Thanks";

export const MainRoute = () => {
  return (
    <Router>
      <div>
        <Switch>

          <Route path={routeNames.thanks} component={ThanksView} />
          <Route path={routeNames.planBuild} component={PlanBuildView} />
          <Route path={routeNames.carData} component={CarDataView} />
          <Route path={routeNames.home} component={HomeView} />

        </Switch>
      </div>
    </Router>
  )
}
