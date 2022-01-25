import { useEffect, useState } from "react";
import { SearchFilter } from "../../../components/SearchFilter/SearchFilter";
import { ANNOUNCEMENTS_LIST } from "../../../constants/announcements";

export const AnnouncementList = () => {
  const [filteredAnnouncements, setFilteredAnnouncements] =
    useState(ANNOUNCEMENTS_LIST);

  const filterAnnouncements = (data) => {
    const { Phrase, Category, City, Animals } = data;
    let announcements = [...ANNOUNCEMENTS_LIST];
    let animalsArray;

    announcements = announcements
      .filter((announcement) =>
        encodeURIComponent(announcement.title.toLowerCase()).includes(
          Phrase.toLowerCase(),
        ),
      )
      .filter((announcement) =>
        encodeURIComponent(announcement.category.toLowerCase()).includes(
          Category,
        ),
      )
      .filter((announcement) =>
        encodeURIComponent(announcement.city.toLowerCase()).includes(
          City.toLowerCase(),
        ),
      );
    if (Animals) {
      animalsArray = Animals.map((animal) => animal.toLowerCase());
      announcements = announcements.filter((announcement) =>
        animalsArray.includes(
          encodeURIComponent(announcement.animal.toLowerCase()),
        ),
      );
    }

    setFilteredAnnouncements(announcements);
  };
  useEffect(() => {
    if (window.location.search) {
      const search = window.location.search.slice(1).split("&");
      const Phrase = search[0].slice(search[0].indexOf("=") + 1);
      const Category = search[1].slice(search[1].indexOf("=") + 1);
      const City = search[2].slice(search[2].indexOf("=") + 1);
      const animalsParams = search.splice(3);
      const Animals = [];
      animalsParams.forEach((param) => {
        const indexOfEqual = param.indexOf("=");
        Animals.push(param.slice(indexOfEqual + 1));
      });
      filterAnnouncements({ Phrase, Category, City, Animals });
    }
  }, []);
  console.log(filteredAnnouncements);

  return (
    <div>
      <SearchFilter filterAnnouncements={filterAnnouncements} />
    </div>
  );
};
