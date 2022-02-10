import { Button } from "../../../components";
import styles from "./account.module.scss";

export const Account = () => {
  return (
    <div className={styles.account_section}>
      <h1 className={styles.title}>Moje konto</h1>
      <div className={styles.wrapper}>
        <form className={styles.form} id="privateOrFirm">
          <label className={styles.label_first}>
            <input
              type="radio"
              className={styles.input}
              name="privateOrFirm"
              value="Osoba prywatna"
            />{" "}
            Osoba prywatna
          </label>
          <label className={styles.label}>
            <input
              type="radio"
              className={styles.input}
              name="privateOrFirm"
              value="Firma"
            />{" "}
            Firma
          </label>
        </form>
        <form className={styles.form} id="email">
          <label className={styles.label}>Adres email</label>
          <input
            type="email"
            className={styles.input}
            placeholder="example@example.com"
          />
        </form>
        <form className={styles.form} id="login">
          <label className={styles.label}>login</label>
          <input type="text" className={styles.input} placeholder="Login" />
        </form>
        <form className={styles.form} id="city">
          <label className={styles.label}>Miasto</label>
          <input type="text" className={styles.input} placeholder="Miasto" />
        </form>
        <form className={styles.form} id="phoneNumber">
          <label className={styles.label}>Numer Telefonu</label>
          <input
            type="tel"
            className={styles.input}
            placeholder="+48 XXX XXX XXX"
          />
        </form>
        <form className={styles.form} id="company">
          <label className={styles.label}>Nazwa firmy</label>
          <input
            type="company"
            className={styles.input}
            placeholder="Nazwa firmy"
          />
        </form>
        <form className={styles.form} id="nip">
          <label className={styles.label}>NIP</label>
          <input
            type="tel"
            className={styles.input}
            placeholder="XXX-XXX-XX-XX"
          />
        </form>
        <Button type="submit" onClick={() => {}}>
          <span className={styles.account_button_text}>Zapisz</span>
        </Button>
      </div>
    </div>
  );
};
