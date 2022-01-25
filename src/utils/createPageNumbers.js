import { POSTS_PER_PAGE } from "../constants/pagination";

export const createPageNumbers = (totalPosts) => {
  const pageNumbers = [];
  const roundedPageNumbersUp = Math.ceil(totalPosts / POSTS_PER_PAGE);

  if (typeof totalPosts === "number") {
    for (let i = 1; i <= roundedPageNumbersUp; i++) {
      pageNumbers.push(i);
    }
  }
  return pageNumbers;
};
