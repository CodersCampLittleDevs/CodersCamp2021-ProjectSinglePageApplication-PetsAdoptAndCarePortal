import { useState } from "react";
import { AnnouncementItem } from "./AnnouncementItem";
import { Pagination } from "../../../components/Pagination/Pagination";
import { ANNOUNCEMENTS_LIST } from "../../../constants/announcementsList";
import styles from "./AnnouncementsList.module.scss";

export const AnnouncementsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = ANNOUNCEMENTS_LIST.slice(
    indexOfFirstPost,
    indexOfLastPost,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.wrapper}>
      <AnnouncementItem posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={ANNOUNCEMENTS_LIST.length}
        paginate={paginate}
      />
    </div>
  );
};
