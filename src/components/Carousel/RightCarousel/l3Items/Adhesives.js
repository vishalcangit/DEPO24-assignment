import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    id: 94,
    name: "Adhesive",
    l2: "Adhesives",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 95,
    name: "Masking Tape",
    l2: "Adhesives",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
];
const Adhesives = () => {
  return (
    <div id={"Adhesives"}>
      <div className={styles.itemNameTitle}>
        <h3>Adhesives</h3>
        <span></span>
      </div>
      <div className={styles.displayItemsContainer}>
        {items.map((item) => (
          <div className={styles.singleItemContainer}>
            <img src={item.image} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adhesives;
