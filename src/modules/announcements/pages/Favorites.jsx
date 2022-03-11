import { FavouritesList } from "../components/FavouritesList/FavouritesList";
import styles from "./favorites.module.scss";

export const Favorites = () => {
  return (
    <div>
      <h2 className={styles.favorites__title}>Ulubione ogłoszenia</h2>
      <FavouritesList />
    </div>
  );
};
