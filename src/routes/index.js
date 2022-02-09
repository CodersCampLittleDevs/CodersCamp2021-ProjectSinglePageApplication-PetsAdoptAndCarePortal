import { authRoutes } from "../modules/auth/routes";
import { Main } from "../modules/main";
import { Account } from "../modules/account";
import { Favorites } from "../modules/announcements/pages/Favorites";
import { AnnouncementList } from "../modules/announcements/pages/Announcements";
import { AnnouncementNew } from "../modules/announcements/pages/New";

export const routes = [
  {
    path: "/",
    component: <Main />,
    exact: true,
    title: "logo",
    isMain: true,
    removeRouteWhenLogged: false,
  },
  {
    path: "/announcements",
    component: <AnnouncementList />,
    exact: true,
    title: "Ogłoszenia",
    displayOnLeftSide: true,
    removeRouteWhenLogged: false,
  },
  {
    path: "/announcements/new",
    component: <AnnouncementNew />,
    title: "Dodaj ogłoszenie",
    isLoggedIn: true,
    visibleWhenLogged: true,
    displayOnLeftSide: true,
    removeRouteWhenLogged: false,
  },
  {
    path: "/account",
    component: <Account />,
    title: "Moje konto",
    visibleWhenLogged: true,
    displayOnRightSide: true,
    removeRouteWhenLogged: false,
  },
  {
    path: "/announcements/favorites",
    component: <Favorites />,
    title: "Ulubione",
    visibleWhenLogged: true,
    displayOnRightSide: true,
    removeRouteWhenLogged: false,
  },
  ...authRoutes,
];
