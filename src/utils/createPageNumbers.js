import { POSTS_PER_PAGE } from "../constants/pagination";

export const createPageNumbers = (totalPosts) => {
  const pageNumbers = [];

  if (typeof totalPosts === "number") {
    for (let i = 1; i <= Math.ceil(totalPosts / POSTS_PER_PAGE); i++) {
      pageNumbers.push(i);
    }
  }
  return pageNumbers;
};
