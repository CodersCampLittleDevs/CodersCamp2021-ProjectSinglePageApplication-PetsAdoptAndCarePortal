import { authRoutes } from "../modules/auth/routes";
import { Main } from "../modules/main";
import { Account } from "../modules/account";
import { Favorites } from "../modules/announcements/pages/Favorites";
import { Announcements } from "../modules/announcements/pages/Announcements";
import { AnnouncementNew } from "../modules/announcements/pages/New";

export const routes = [
  {
    path: "/",
    component: <Main />,
    exact: true,
    title: "logo",
    isMain: true,
  },
  {
    path: "/announcements",
    component: <Announcements />,
    exact: true,
    title: "Ogloszenia",
    displayOnLeftSide: true,
  },
  {
    path: "/announcements/new",
    component: <AnnouncementNew />,
    title: "Dodaj post",
    displayOnLeftSide: true,
  },
  {
    path: "/announcements/favorites",
    component: <Favorites />,
    title: "Ulubione",
    visibleWhenLogged: true,
    displayOnLeftSide: true,
  },
  ...authRoutes,
  {
    path: "/account",
    component: <Account />,
    title: "Moje konto",
    visibleWhenLogged: true,
    displayOnRightSide: true,
  },
];
