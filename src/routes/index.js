import { authRoutes } from "../modules/auth";
import { Main } from "../modules/main";
import { Account } from "../modules/account";
import { announcementsRoutes } from "../modules/announcements";

export const routes = [
  {
    path: "/",
    component: <Main />,
    exact: true,
  },
  ...authRoutes,
  {
    path: "/account",
    component: <Account />,
  },
  ...announcementsRoutes,
];
