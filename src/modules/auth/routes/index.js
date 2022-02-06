import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { ForgotPassword } from "../pages/ForgotPassword";

export const authRoutes = [
  {
    path: "/auth/login",
    component: <Login />,
  },
  {
    path: "/auth/register",
    component: <Register />,
  },
  {
    path: "/auth/forgot",
    component: <ForgotPassword />,
  },
];
