import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { ForgotPassword } from "../pages/ForgotPassword";

export const authRoutes = [
  {
    path: "/auth/register",
    component: <Register />,
    isLoggedIn: false,
    displayOnRightSide: true,
    removeRouteWhenLogged: true,
    title: "Zarejestruj",
  },
  {
    path: "/auth/login",
    component: <Login />,
    isLoggedIn: false,
    displayOnRightSide: true,
    removeRouteWhenLogged: true,
    title: "Zaloguj",
  },
  {
    path: "/auth/forgot",
    component: <ForgotPassword />,
    removeRouteWhenLogged: true,
  },
];
