import { Announcement } from "./Announcement";
import { ANNOUNCEMENTS_LIST } from "../../../constants/announcementsList";

export const AnnouncementList = () => {
  return (
    <div>
      {ANNOUNCEMENTS_LIST.map((item) => {
        return (
          <Announcement
            key={item.id}
            imageSrc={item.image}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </div>
  );
};
