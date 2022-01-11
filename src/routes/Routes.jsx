import { BrowserRouter as Router, Route } from "react-router-dom";
import { routes } from "./index";

export const Routes = () => {
  return (
    <Router>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} exact={route.exact}>
          {route.component}
        </Route>
      ))}
    </Router>
  );
};
