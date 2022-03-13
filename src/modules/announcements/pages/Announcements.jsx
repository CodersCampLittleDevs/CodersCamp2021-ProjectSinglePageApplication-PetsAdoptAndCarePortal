import { useEffect, useState, useCallback } from "react";
import { SearchForm, PageTitle, LoadingSpinner } from "../../../components";
import { AnnouncementsList } from "../components/AnnouncementsList/AnnouncementsList";
import { useHttpClient } from "../../../hooks/httpHook";
import { createSearchParamsString } from "../../../utils/createSearchParamString";

export const Announcements = () => {
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);
  const { isLoading, sendRequest } = useHttpClient();

  const getAnnouncements = useCallback(
    async (data) => {
      let queries = "";
      if (data) {
        queries = createSearchParamsString(data);
      }
      try {
        const announcements = await sendRequest(
          `http://localhost:8000/announcements?${queries}`,
        );
        setFilteredAnnouncements(announcements);
      } catch (e) {
        throw new Error(e);
      }
    },
    [sendRequest],
  );
  useEffect(() => {
    getAnnouncements();
  }, [getAnnouncements]);

  return (
    <div>
      <PageTitle>Ogłoszenia</PageTitle>
      <SearchForm getAnnouncements={getAnnouncements} />
      {isLoading && <LoadingSpinner />}
      <AnnouncementsList
        isLoading={isLoading}
        filteredAnnouncements={filteredAnnouncements}
      />
    </div>
  );
};
