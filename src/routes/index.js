import { FaRegIdCard, FaGratipay, FaUserCog, FaUserPlus } from "react-icons/fa";
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
    title: "ogloszenia",
  },
  {
    path: "/announcements/new",
    component: <AnnouncementNew />,
    title: "Dodaj post",
    icon: <FaRegIdCard />,
  },
  {
    path: "/announcements/favorites",
    component: <Favorites />,
    title: "Ulubione",
    icon: <FaGratipay />,
    visibleWhenLogged: true,
  },
  {
    path: "/auth",
    component: <Auth />,
    title: "Zarejestruj sie",
    icon: <FaUserPlus />,
  },
  {
    path: "/account",
    component: <Account />,
    title: "Moje konto",
    icon: <FaUserCog />,
    visibleWhenLogged: true,
  },
];
