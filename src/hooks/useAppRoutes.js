import { routes } from "../routes";

export const useAppRoutes = () => {
  const mainRoute = routes.find((item) => item.isMain);
  const leftSideRoutes = routes.filter((item) => item.displayOnLeftSide);
  const rightSideRoutes = routes.filter((item) => item.displayOnRightSide);

  return { mainRoute, leftSideRoutes, rightSideRoutes };
};
