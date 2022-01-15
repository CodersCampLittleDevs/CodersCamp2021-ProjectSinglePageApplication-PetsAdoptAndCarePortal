import React from "react";
import "./footerStyles.scss";

export const Footer = () => {
  return (
    <div className="container">
      <img className="logo" alt="logo" />
      <section className="column">
        <h1 className="heading">O nas</h1>
        <h2 className="link" href="#">
          Nasza misja
        </h2>
        <h2 className="link">Kontakt</h2>
        <h2 className="link">Regulamin</h2>
      </section>
      <section className="column">
        <h1 className="heading">Wyszukaj</h1>
        <h2 className="link">Adopcje</h2>
        <h2 className="link">Hotele</h2>
        <h2 className="link">Usługi dla zwierząt</h2>
      </section>
      <section className="column">
        <h1 className="heading">Social Media</h1>
        <h2 className="link" href="#">
          {/* <FontAwesomeIcon icon={["fab", "fa-instagram"]} /> */}
        </h2>
        <h2 className="link" href="#">
          {/* <FontAwesomeIcon icon={["fab fa-facebook-square"]} /> */}
        </h2>
        <h2 className="link" href="#">
          {/* <FontAwesomeIcon icon={["fab fa-twitter-square"]} />{" "} */}
        </h2>
      </section>
    </div>
  );
};
