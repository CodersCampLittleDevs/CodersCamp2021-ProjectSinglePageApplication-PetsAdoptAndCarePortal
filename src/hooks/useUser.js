import { DUMMY_LOGINS } from "../mock/auth";

export const useUser = () => {
  //   const user = localStorage.getItem("user");
  const user = DUMMY_LOGINS[0];
  return { user };
};
