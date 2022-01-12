import { Auth } from "../modules/auth/pages/index";
import { Main } from "../modules/main/pages/index";
import { Account } from "../modules/account/pages/index";
import { Favorites } from "../modules/announcements/pages/favorites";
import { Announcement } from "../modules/announcements/pages/announcement";
import { Hotel } from "../modules/announcements/pages/hotel";
import { Services } from "../modules/announcements/pages/services";
import { Adoption } from "../modules/announcements/pages/adoption";

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
    path: "/announcements/hotel",
    component: <Hotel />,
    exact: "exact",
  },
  {
    path: "/announcements/services",
    component: <Services />,
    exact: "exact",
  },
  {
    path: "/announcements/adoption",
    component: <Adoption />,
    exact: "exact",
  },
  {
    path: "/announcements/favorites",
    component: <Favorites />,
    exact: "exact",
  },
  {
    path: "/announcements/:id",
    component: <Announcement />,
    exact: "exact",
  },
];
