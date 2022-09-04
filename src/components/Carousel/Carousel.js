import React from "react";
import data from "../../db.json";
import styles from "./Carousel.module.css";
import LeftCarousel from "./LeftCarousel/LeftCarousel";
import RightCarousel from "./RightCarousel/RightCarousel";

const Carousel = () => {
  console.log(data);
  // const name = data[0];
  // console.log(data[0]);
  return (
    <div className={styles.carouselContainer}>
      <LeftCarousel />
      <RightCarousel />
    </div>
  );
};

export default Carousel;
