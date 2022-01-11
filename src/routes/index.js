import { Auth } from "../modules/auth/pages";
import { Main } from "../modules/main/pages";

export const routes = [
  {
    path: "/",
    component: <Auth />,
    exact: "exact",
  },
  {
    path: "/main",
    component: <Main />,
  },
];
