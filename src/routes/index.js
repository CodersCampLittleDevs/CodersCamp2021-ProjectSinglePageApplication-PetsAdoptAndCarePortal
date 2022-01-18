import { FaUserCog, FaUserPlus } from "react-icons/fa";
import { Auth } from "../modules/auth";
import { Main } from "../modules/main";
import { Account } from "../modules/account";
import { announcementsRoutes } from "../modules/announcements";

export const routes = [
  {
    path: "/",
    component: <Main />,
    exact: "exact",
    logo: true,
  },
  {
    path: "/auth",
    component: <Auth />,
    title: "Zarejestruj sie",
    icon: <FaUserPlus />,
    right: true,
  },
  {
    path: "/account",
    component: <Account />,
    title: "Moje konto",
    icon: <FaUserCog />,
    right: true,
    visibleWhenLogged: true,
  },

  ...announcementsRoutes,
];
