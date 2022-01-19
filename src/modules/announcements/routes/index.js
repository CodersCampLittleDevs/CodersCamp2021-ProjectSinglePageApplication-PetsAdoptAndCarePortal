import { FaRegIdCard, FaGratipay } from "react-icons/fa";
import { Favorites } from "../pages/Favorites";
import { AnnouncementList } from "../pages/Announcements";
import { AnnouncementNew } from "../pages/New";
import { Announcement } from "../pages/Announcement";

export const announcementsRoutes = [
  {
    path: "/announcements",
    component: <AnnouncementList />,
    exact: "exact",
    title: "ogloszenia",
    left: true,
  },
  {
    path: "/announcements/new",
    component: <AnnouncementNew />,
    title: "Dodaj post",
    icon: <FaRegIdCard />,
    left: true,
  },
  {
    path: "/announcements/favorites",
    component: <Favorites />,
    title: "Ulubione",
    icon: <FaGratipay />,
    visibleWhenLogged: true,
    left: true,
  },
  {
    path: "/announcements/:id",
    component: <Announcement />,
  },
];
