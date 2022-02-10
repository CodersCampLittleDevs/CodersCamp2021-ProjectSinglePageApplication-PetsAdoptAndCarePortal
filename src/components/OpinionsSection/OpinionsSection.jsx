/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Opinion } from "./Opinion";
import styles from "./opinionsSection.module.scss";
import { OPINIONS_LIST } from "../../constants/opinions";
import "swiper/css";
import "swiper/css/navigation";
import "./swiper.scss";

SwiperCore.use([Navigation]);

export const OpinionsSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Opinie naszych klientów</h2>
      <div className={styles.sliderContainer}>
        <div className="swiper-button-prev"> </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
        >
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
        </Swiper>
        <div className="swiper-button-next"> </div>
      </div>
    </section>
  );
};
