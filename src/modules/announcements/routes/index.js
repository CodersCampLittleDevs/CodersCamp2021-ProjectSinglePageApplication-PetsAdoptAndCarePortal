import { Favorites } from "../pages/Favorites";
import { Announcements } from "../pages/Announcements";
import { AnnouncementNew } from "../pages/New";
import { Announcement } from "../pages/Announcement";

export const announcementsRoutes = [
  {
    path: "/announcements",
    component: <Announcements />,
    exact: true,
  },
  {
    path: "/announcements/new",
    component: <AnnouncementNew />,
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
