import Auth from "../modules/auth/index";
import Main from "../modules/main/index";
import Account from "../modules/account/index";
import Announcement from "../modules/announcement/index";
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
