import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchForm } from "../../../components/SearchForm/SearchForm";
import { ANNOUNCEMENTS_LIST } from "../../../constants/announcements";

export const AnnouncementList = () => {
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);
  const { search } = useLocation();

  const filterAnnouncements = (data) => {
    const { Phrase, Category, City, Animals } = data;
    let animalsArray;
    let announcements = ANNOUNCEMENTS_LIST.filter(
      (announcement) =>
        announcement.title.toLowerCase().includes(Phrase.toLowerCase()) &&
        announcement.category.toLowerCase().includes(Category) &&
        announcement.city.toLowerCase().includes(City.toLowerCase()),
    );
    if (Animals) {
      animalsArray = Animals.map((animal) => animal.toLowerCase());
      announcements = announcements.filter((announcement) =>
        animalsArray.includes(announcement.animal.toLowerCase()),
      );
    }
    return announcements;
  };

  const setFilters = (announcements) => {
    setFilteredAnnouncements(announcements);
  };
  useEffect(() => {
    if (search) {
      const params = new URLSearchParams(search);
      const Phrase = params.get("phrase");
      const Category = params.get("category");
      const City = params.get("city");
      const Animals = params.getAll("animal");
      const announcements = filterAnnouncements({
        Phrase,
        Category,
        City,
        Animals,
      });
      setFilters(announcements);
    } else {
      setFilters(ANNOUNCEMENTS_LIST);
    }
  }, []);
  console.log(filteredAnnouncements);

  return (
    <div>
      <SearchForm
        filterAnnouncements={filterAnnouncements}
        setFilters={setFilters}
      />
    </div>
  );
};
