import { Register } from "../pages/Register";
import { Login } from "../pages/Login";

export const authRoutes = [
  {
    path: "/auth/login",
    component: <Login />,
  },
  {
    path: "/auth/register",
    component: <Register />,
  },
];
