import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    name: "Coconut Lamp",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
];
const LampLights = () => {
  return (
    <div id={"Lamp & Lights"}>
      <div className={styles.itemNameTitle}>
        <h3>LampLights</h3>
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

export default LampLights;
