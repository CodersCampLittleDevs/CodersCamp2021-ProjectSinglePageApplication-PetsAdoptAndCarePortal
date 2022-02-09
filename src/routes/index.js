import { authRoutes } from "../modules/auth/routes";
import { Main } from "../modules/main";
import { Account } from "../modules/account";
import { Favorites } from "../modules/announcements/pages/Favorites";
import { Announcements } from "../modules/announcements/pages/Announcements";
import { NewAnnouncement } from "../modules/announcements/pages/NewAnnouncement";

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
    component: <Announcements />,
    exact: true,
    title: "Ogłoszenia",
    displayOnLeftSide: true,
    removeRouteWhenLogged: false,
  },
  {
    path: "/announcements/new",
    component: <NewAnnouncement />,
    title: "Dodaj ogłoszenie",
    exact: true,
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
