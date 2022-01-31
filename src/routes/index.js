import { Auth } from "../modules/auth";
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
    title: "Ogloszenia",
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
  {
    path: "/auth",
    component: <Auth />,
    title: "Zarejestruj sie",
  },
  {
    path: "/account",
    component: <Account />,
    title: "Moje konto",
    visibleWhenLogged: true,
  },
];
