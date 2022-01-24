import { useState } from "react";
import { AnnouncementItem } from "./AnnouncementItem";
import { Pagination } from "../../../components/Pagination/Pagination";
import { ANNOUNCEMENTS_LIST } from "../../../constants/announcementsList";
import styles from "./announcementsList.module.scss";
import { POSTS_PER_PAGE } from "../../../constants/pagination";

export const AnnouncementsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = ANNOUNCEMENTS_LIST.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.wrapper}>
      {currentPosts.map((item) => {
        return (
          <AnnouncementItem
            key={item.id}
            title={item.title}
            imageSrc={item.image}
            description={item.description}
            price={item.price}
          />
        );
      })}
      <Pagination totalPosts={ANNOUNCEMENTS_LIST.length} paginate={paginate} />
    </div>
  );
};
