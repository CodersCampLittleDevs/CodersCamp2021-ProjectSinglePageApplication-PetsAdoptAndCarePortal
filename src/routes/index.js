import Auth from "../modules/auth/index";
import Main from "../modules/main/index";
import Account from "../modules/account/index";
import Announcement from "../modules/announcement/index";
import AnnouncementNew from "../modules/announcement-new/index";
import {
  Favorites,
  AnnouncementList,
} from "../modules/announcement-list/index";

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
  {
    path: "/new-announcement",
    component: <AnnouncementNew />,
  },
  {
    path: "/announcements",
    component: <AnnouncementList />,
    exact: "exact",
  },
  {
    path: "/announcements/favorites",
    component: <Favorites />,
  },
  {
    path: "/announcements/:id",
    component: <Announcement />,
  },
];
