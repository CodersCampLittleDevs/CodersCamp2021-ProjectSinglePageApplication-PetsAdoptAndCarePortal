import { useParams } from "react-router-dom";
import { useHttpClient } from "../../../hooks/httpHook";

export const useAnnoucement = async () => {
  const { isLoading, sendRequest } = useHttpClient();
  const { id } = useParams();
  const announcement = await sendRequest(
    `http://localhost:8000/announcements/${id}`,
  );
  console.log(announcement);
  const user = await sendRequest(
    `http://localhost:8000/announcements/${announcement.user}`,
  );

  return { announcement, user, isLoading };
};
