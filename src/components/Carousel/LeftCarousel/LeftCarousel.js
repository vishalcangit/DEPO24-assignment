import React, { useState } from "react";
import FurnitureFittings from "./Furniture/FurnitureFittings";
import HomeDecor from "./HomeDecor/HomeDecor";
import styles from "./LeftCarousel.module.css";

const LeftCarousel = () => {
  return (
    <div className={styles.leftCarouselContainer}>
      <FurnitureFittings />
      <HomeDecor />
    </div>
  );
};

export default LeftCarousel;
