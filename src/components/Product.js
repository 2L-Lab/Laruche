import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import produit from "../styles/assets/img/cremesdm.jpg";
import produit2 from "../styles/assets/img/creme_sublime_repulp_secrets_de_miel_packaging.jpg";

// import required modules
import { Pagination, Navigation } from "swiper";

const Product = () => {
  return (
    <>
      <div className="divider">
        <h2>Nos Produits</h2>
        <i class="fa-regular fa-heart"></i>
      </div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="produit" src={produit} alt="Produit secret d emiel" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="produit"
            src={produit2}
            alt="Produit descret de miel"
          />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Product;
