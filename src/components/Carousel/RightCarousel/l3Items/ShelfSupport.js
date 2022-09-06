import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    id: 102,
    name: "U Bracket",
    l2: "Shelf Support",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 103,
    name: "Folding Bracket",
    l2: "Shelf Support",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Folding+Bracket/Folding+Bracket.webp",
  },
  {
    id: 104,
    name: "D Bracket",
    l2: "Shelf Support",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 105,
    name: "F Bracket",
    l2: "Shelf Support",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/F+Bracket/F+Bracket.webp",
  },
  {
    id: 106,
    name: "L-Support",
    l2: "Shelf Support",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 107,
    name: "Batt Vacuum",
    l2: "Shelf Support",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
];
const ShelfSupport = () => {
  return (
    <div id={"Shelf Support"}>
      <div className={styles.itemNameTitle}>
        <h3>ShelfSupport</h3>
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

export default ShelfSupport;
