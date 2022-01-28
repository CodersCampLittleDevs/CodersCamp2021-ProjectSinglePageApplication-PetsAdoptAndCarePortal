import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchForm } from "../../../components/SearchForm/SearchForm";
import { ANNOUNCEMENTS_LIST } from "../../../constants/announcements";

export const AnnouncementList = () => {
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);
  const { search } = useLocation();

  const filterAnnouncements = (data) => {
    const { Phrase, Category, City, Animals } = data;
    let announcements = [...ANNOUNCEMENTS_LIST];
    let animalsArray;

    announcements = announcements
      .filter((announcement) =>
        announcement.title.toLowerCase().includes(Phrase.toLowerCase()),
      )
      .filter((announcement) =>
        announcement.category.toLowerCase().includes(Category),
      )
      .filter((announcement) =>
        announcement.city.toLowerCase().includes(City.toLowerCase()),
      );
    if (Animals) {
      animalsArray = Animals.map((animal) => animal.toLowerCase());
      announcements = announcements.filter((announcement) =>
        animalsArray.includes(announcement.animal.toLowerCase()),
      );
    }

    setFilteredAnnouncements(announcements);
  };
  useEffect(() => {
    if (search) {
      const params = new URLSearchParams(search);
      const Phrase = params.get("phrase");
      const Category = params.get("category");
      const City = params.get("city");
      const Animals = params.getAll("animal");
      filterAnnouncements({ Phrase, Category, City, Animals });
    } else {
      setFilteredAnnouncements(ANNOUNCEMENTS_LIST);
    }
  }, []);
  console.log(filteredAnnouncements);

  return (
    <div>
      <SearchForm filterAnnouncements={filterAnnouncements} />
    </div>
  );
};
