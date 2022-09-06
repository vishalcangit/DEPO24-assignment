import React from "react";
import styles from "./Carousel.module.css";
import LeftCarousel from "./LeftCarousel/LeftCarousel";
import RightCarousel from "./RightCarousel/RightCarousel";

const Carousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <LeftCarousel />
      <RightCarousel />
    </div>
  );
};

export default Carousel;
