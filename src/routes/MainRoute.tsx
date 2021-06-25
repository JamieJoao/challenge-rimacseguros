import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { routeNames } from 'constants/index';
import { HomeView } from "views/Home";
import { CarDataView } from "views/CarData";
import { PlanBuildView } from "views/PlanBuild";
import { ThanksView } from "views/Thanks";
import { useSession } from 'context/session/SessionContext';

export const MainRoute = () => {
  const { user } = useSession()

  return (
    <Router>
      <div>
        {!user.id
          ? (
            <Switch>
              <Route path={routeNames.home} component={HomeView} />
            </Switch>
          )
          : (
            <Switch>
              <Route path={routeNames.thanks} component={ThanksView} />
              <Route path={routeNames.planBuild} component={PlanBuildView} />
              <Route path={routeNames.home} component={CarDataView} />
            </Switch>
          )}
      </div>
    </Router>
  )
}
