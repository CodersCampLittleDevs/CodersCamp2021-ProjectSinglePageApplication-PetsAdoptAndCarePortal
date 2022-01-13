import { Favorites } from "../pages/Favorites";
import { AnnouncementList } from "../pages/Announcements";
import { AnnouncementNew } from "../pages/New";
import { Announcement } from "../pages/Announcement";

export const announcementsRoutes = [
  {
    path: "/announcements",
    component: <AnnouncementList />,
    exact: "exact",
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
