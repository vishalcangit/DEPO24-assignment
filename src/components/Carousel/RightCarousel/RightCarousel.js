import React from "react";
import data from "../../../db.json";
import ItemList from "./ItemList";
import styles from "./RightCarousel.module.css";

const RightCarousel = () => {
  console.log(data);
  return (
    <div className={styles.rightCarouselContainer}>
      <div>
        {data.map((item) => {
          <p>{item[0]}</p>;
          return <ItemList items={item[1]} />;
        })}
      </div>
    </div>
  );
};

export default RightCarousel;
