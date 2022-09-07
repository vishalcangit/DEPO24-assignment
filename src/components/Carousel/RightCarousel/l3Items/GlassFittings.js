import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    id: 78,
    name: "Glass Fitting",
    l2: "Glass Fittings",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 79,
    name: "Glass Handles",
    l2: "Glass Fittings",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 80,
    name: "Floor Spring",
    l2: "Glass Fittings",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 81,
    name: "Glass Hinges",
    l2: "Glass Fittings",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Glass+Hinges/Glass+Hinges.webp",
  },
];

const GlassFittings = () => {
  return (
    <div id={"Glass Fittings"}>
      <div className={styles.itemNameTitle}>
        <h3>Glass Fittings</h3>
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

export default GlassFittings;
