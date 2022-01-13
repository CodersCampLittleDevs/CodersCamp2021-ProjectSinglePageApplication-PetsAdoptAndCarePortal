import Auth from "../modules/auth";
import Main from "../modules/main";
import Account from "../modules/account";
import Announcement from "../modules/announcement";
import { announcementsRoutes } from "../modules/announcements";

export const routes = [
  {
    path: "/",
    component: <Main />,
    exact: "exact",
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
  {
    path: "/announcements/:id",
    component: <Announcement />,
  },
];
