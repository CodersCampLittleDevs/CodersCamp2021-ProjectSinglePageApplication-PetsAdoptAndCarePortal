import { Route, Switch, Redirect } from "react-router-dom";
import { useContext } from "react";
import { routes } from "./index";
import { AuthContext } from "../context/auth/AuthContext";

export const AppRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const routesWhenLogged = routes.filter(
    (route) => !route.removeRouteWhenLogged,
  );
  return (
    <Switch>
      {isLoggedIn
        ? routesWhenLogged.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              {route.component}
            </Route>
          ))
        : routes.map((route) => (
            <Route key={route.path} path={route.path} exact={route.exact}>
              {route.component}
            </Route>
          ))}
      <Redirect to="/" />
    </Switch>
  );
};
