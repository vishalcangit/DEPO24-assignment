import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    id: 99,
    name: "Blades",
    l2: "Hardware Tools",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 100,
    name: "Screwdriver",
    l2: "Hardware Tools",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 101,
    name: "Carpentary tools",
    l2: "Hardware Tools",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
];

const HardwareTools = () => {
  return (
    <div id={"Hardware Tools"}>
      <div className={styles.itemNameTitle}>
        <h3>Hardware Tools</h3>
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

export default HardwareTools;
