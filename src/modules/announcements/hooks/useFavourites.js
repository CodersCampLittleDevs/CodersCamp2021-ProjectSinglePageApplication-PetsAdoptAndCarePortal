import { ANNOUNCEMENTS_LIST } from "../../../constants/announcements";
import { useUser } from "../../../hooks/useUser";

export const useFavourites = () => {
  const { user } = useUser();
  const favouritesAnnouncements = ANNOUNCEMENTS_LIST.filter((announcement) =>
    user.favouritesIds.includes(announcement.id),
  );
  return { favouritesAnnouncements };
};
