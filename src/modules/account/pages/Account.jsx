import { Button } from "../../../components";
import styles from "./account.module.scss";

export const Account = () => {
  const { person, firm, mail, login, city, phone, company, nip } = "";
  return (
    <div className={styles.account_section}>
      <h1 className={styles.title}>Moje konto</h1>
      <div className={styles.wrapper}>
        <form className={styles.form}>
          <label htmlFor={person} className={styles.label}>
            <input
              type="radio"
              className={styles.input}
              name="privateOrFirm"
              value="Osoba prywatna"
              id={person}
            />{" "}
            Osoba prywatna
          </label>
          <label htmlFor={firm} className={styles.label}>
            <input
              type="radio"
              className={styles.input}
              name="privateOrFirm"
              value="Firma"
              id={firm}
            />{" "}
            Firma
          </label>
          <label htmlFor={mail} className={styles.label}>
            Adres email
            <input
              type="email"
              className={styles.input}
              placeholder="example@example.com"
              id={mail}
            />
          </label>
          <label htmlFor={login} className={styles.label}>
            Login
            <input
              type="text"
              className={styles.input}
              placeholder="Login"
              id={login}
            />
          </label>
          <label htmlFor={city} className={styles.label}>
            Miasto
            <input
              type="text"
              className={styles.input}
              placeholder="Miasto"
              id={city}
            />
          </label>
          <label htmlFor={phone} className={styles.label}>
            Numer Telefonu
            <input
              type="tel"
              className={styles.input}
              placeholder="+48 XXX XXX XXX"
              id={phone}
            />
          </label>
          <label htmlFor={company} className={styles.label}>
            Nazwa firmy
            <input
              type="company"
              className={styles.input}
              placeholder="Nazwa firmy"
              id={company}
            />
          </label>
          <label htmlFor={nip} className={styles.label}>
            NIP
            <input
              type="tel"
              className={styles.input}
              placeholder="XXX-XXX-XX-XX"
              id={nip}
            />
          </label>
        </form>
        <Button type="submit" onClick={() => {}}>
          <span className={styles.account_button_text}>Zapisz</span>
        </Button>
      </div>
    </div>
  );
};
