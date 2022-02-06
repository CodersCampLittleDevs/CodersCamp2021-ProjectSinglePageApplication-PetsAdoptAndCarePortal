import { ANNOUNCEMENTS_LIST } from "../constants/announcements";

export const filterAnnouncements = (data) => {
  const { Phrase, Category, City, Animals } = data;
  let animalsArray;
  let announcements = ANNOUNCEMENTS_LIST.filter(
    (announcement) =>
      announcement.title.toLowerCase().includes(Phrase.toLowerCase()) &&
      announcement.category.toLowerCase().includes(Category) &&
      announcement.city.toLowerCase().includes(City.toLowerCase()),
  );
  if (Animals) {
    animalsArray = Animals.map((animal) => animal.toLowerCase());
    announcements = announcements.filter((announcement) =>
      animalsArray.includes(announcement.animal.toLowerCase()),
    );
  }
  return announcements;
};
