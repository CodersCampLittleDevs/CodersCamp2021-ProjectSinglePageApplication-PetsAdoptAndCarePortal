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
    logo: true,
  },
  {
    path: "/announcements",
    component: <AnnouncementList />,
    exact: true,
    title: "ogloszenia",
  },
  {
    path: "/announcements/new",
    component: <AnnouncementNew />,
    title: "Dodaj post",
  },
  {
    path: "/announcements/favorites",
    component: <Favorites />,
    title: "Ulubione",
    visibleWhenLogged: true,
  },
  ...authRoutes,
  {
    path: "/account",
    component: <Account />,
    title: "Moje konto",
    visibleWhenLogged: true,
  },
];
