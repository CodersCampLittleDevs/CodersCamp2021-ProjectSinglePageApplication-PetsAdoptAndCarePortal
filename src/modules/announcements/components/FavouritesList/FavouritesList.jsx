import React from "react";
import { useFavourites } from "../../hooks/useFavourites";
import { AnnouncementsList } from "../AnnouncementsList/AnnouncementsList";

export const FavouritesList = () => {
  const { favouritesAnnouncements } = useFavourites();
  return <AnnouncementsList filteredAnnouncements={favouritesAnnouncements} />;
};
