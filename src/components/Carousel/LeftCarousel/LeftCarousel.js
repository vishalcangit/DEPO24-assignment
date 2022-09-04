import React, { useState } from "react";
import l1 from "../../../db";
import data from "../../../db.json";
import FurnitureFittings from "./Furniture/FurnitureFittings";
import HomeDecor from "./HomeDecor/HomeDecor";
import styles from "./LeftCarousel.module.css";

const LeftCarousel = () => {
  const [showDropdown, setShowDropdown] = useState("false");

  console.log(showDropdown);
  console.log(data[0]);

  return (
    <div className={styles.leftCarouselContainer}>
      <FurnitureFittings />
      <HomeDecor />
    </div>
  );
};

export default LeftCarousel;
