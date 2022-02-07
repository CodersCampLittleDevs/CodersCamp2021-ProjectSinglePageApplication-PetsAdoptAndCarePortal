/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Opinion } from "../Opinion/Opinion";
import styles from "./opinionsSection.module.scss";
import { OPINIONS_LIST } from "../../../constants/opinions";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

export const OpinionsSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Opinie naszych klientów</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
      >
        <div className="swiper-button-prev"> </div>
        {OPINIONS_LIST.map((opinion) => (
          <SwiperSlide key={opinion.id}>
            <Opinion
              rating={opinion.rating}
              description={opinion.description}
              name={opinion.name}
              city={opinion.city}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-next"> </div>
      </Swiper>
    </section>
  );
};
