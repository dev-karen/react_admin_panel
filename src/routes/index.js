import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "routes/config";
import { LOGIN_ROUTE, DASHBOARD_ROUTE } from "routes/constants";
import NotFound from "../screens/errors/notFound";
import { HOME_ROUTE, NOT_FOUND_ROUTE } from "./constants";

const Login = lazy(() => import("screens/auth/login"));
const Dashboard = lazy(() => import("screens/dashboard"));

export function MainRouter() {
  const isAuthenticated = true;
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <PublicRoutes path={HOME_ROUTE} exact>
            <Login />
          </PublicRoutes>
          <PublicRoutes path={LOGIN_ROUTE} exact>
            <Login />
          </PublicRoutes>
          <PrivateRoutes
            path={DASHBOARD_ROUTE}
            isAuthenticated={isAuthenticated}
            exact
          >
            <Dashboard />
          </PrivateRoutes>
          <Route path={NOT_FOUND_ROUTE}>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
export default MainRouter;
