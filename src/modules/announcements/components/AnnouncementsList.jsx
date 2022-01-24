import { useState } from "react";
import { AnnouncementItem } from "./AnnouncementItem";
import { Pagination } from "../../../components/Pagination/Pagination";
import { ANNOUNCEMENTS_LIST } from "../../../constants/announcementsList";
import styles from "./announcementsList.module.scss";
import { POST_PER_PAGE } from "../../../constants/pagination";

export const AnnouncementsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * POST_PER_PAGE;
  const currentPosts = ANNOUNCEMENTS_LIST.slice(
    startIndex,
    startIndex + POST_PER_PAGE,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.wrapper}>
      <AnnouncementItem post={currentPosts} />
      <Pagination totalPosts={ANNOUNCEMENTS_LIST.length} paginate={paginate} />
    </div>
  );
};
