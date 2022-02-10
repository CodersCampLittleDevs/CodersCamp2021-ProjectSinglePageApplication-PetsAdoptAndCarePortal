import { useParams } from "react-router-dom";
import { ANNOUNCEMENTS_LIST } from "../../../constants/announcements";
import { DUMMY_LOGINS } from "../../../mock/auth";

export const useAnnoucement = () => {
  const { id } = useParams();
  const announcement = ANNOUNCEMENTS_LIST.find(
    (annoucementItem) => annoucementItem.id === Number(id),
  );
  const user = DUMMY_LOGINS.find(
    (userItem) => userItem.id === announcement.userId,
  );

  return { id, announcement, user };
};
