import { Auth } from "../modules/auth";
import { Main } from "../modules/main";
import { Account } from "../modules/account";
import { announcementsRoutes } from "../modules/announcements";

export const routes = [
  {
    path: "/",
    component: <Main />,
    exact: true,
  },
  {
    path: "/auth",
    component: <Auth />,
  },
  {
    path: "/account",
    component: <Account />,
  },
  ...announcementsRoutes,
];
