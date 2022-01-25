import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from "./index";

export const AppRoutes = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact}>
          {route.component}
        </Route>
      ))}
      <Redirect to="/" />
    </Switch>
  );
};
