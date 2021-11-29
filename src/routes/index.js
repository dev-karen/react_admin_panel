import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "routes/config";
import {
  LOGIN_ROUTE,
  DASHBOARD_ROUTE,
  HOME_ROUTE,
  NOT_FOUND_ROUTE,
} from "routes/constants";
import { useUserTokenState } from "context/userToken";
import NotFound from "../screens/errors/notFound";

const Login = lazy(() => import("screens/auth/login"));
const Dashboard = lazy(() => import("screens/dashboard"));

export function MainRouter() {
  const token = useUserTokenState();
  function isLoggedIn() {
    if (token === "" || token === undefined || token === null) {
      return false;
    } else {
      return true;
    }
  }
  const isAuthenticated = isLoggedIn();
  console.log("token:", isLoggedIn());

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
