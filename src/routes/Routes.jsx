import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { routes } from "./index";

export const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact}>
            {route.component}
          </Route>
        ))}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
