import propTypes from "prop-types";

import React, { useMemo, useState } from "react";
import { ANNOUNCEMENTS_LIST } from "../../constants/announcements";

const AnnouncementsContext = React.createContext({
  announcements: [],
  filter: () => {},
});

export const AnnouncementsContexProvider = ({ children }) => {
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);

  const filter = (data) => {
    const { Phrase, Kategoria, Animals } = data;
    let announcements = [...ANNOUNCEMENTS_LIST];
    announcements = announcements.filter((announcement) =>
      announcement.title.toLowerCase().includes(Phrase),
    );
    announcements = announcements.filter((announcement) =>
      announcement.category.toLowerCase().includes(Kategoria),
    );
    announcements = announcements.filter((announcement) =>
      announcement.animal.toLowerCase().includes(Animals),
    );
    setFilteredAnnouncements(announcements);
  };

  const state = useMemo(
    () => ({
      announcements: filteredAnnouncements,
      filter,
    }),
    [filteredAnnouncements],
  );

  return (
    <AnnouncementsContext.Provider value={state}>
      {children}
    </AnnouncementsContext.Provider>
  );
};

export default AnnouncementsContext;

AnnouncementsContexProvider.propTypes = {
  children: propTypes.node.isRequired,
};
