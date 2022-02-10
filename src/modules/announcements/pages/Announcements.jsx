import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchForm } from "../../../components";
import { ANNOUNCEMENTS_LIST } from "../../../constants/announcements";
import { filterAnnouncements } from "../../../utils";
import { AnnouncementsList } from "../components/AnnouncementsList/AnnouncementsList";

export const Announcements = () => {
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);
  const { search } = useLocation();

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
  }, [search]);

  return (
    <div>
      <SearchForm
        filterAnnouncements={filterAnnouncements}
        setFilters={setFilters}
      />
      <AnnouncementsList filteredAnnouncements={filteredAnnouncements} />
    </div>
  );
};
