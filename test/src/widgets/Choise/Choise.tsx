import { choiseArray } from "@shared/arrays/choise";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Choise.scss";

const Choise = () => {
  return (
    <div className="choise">
      <Swiper spaceBetween={5} slidesPerView={5}>
        {choiseArray.map((el, idx) => (
          <SwiperSlide key={idx}>
            <div className="choise__slide">
              <img
                className="choise__slide-image"
                src={el.image}
                alt={el.alt}
              />
              <p className="choise__slide-text">{el.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Choise;
