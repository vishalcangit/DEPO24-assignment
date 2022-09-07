import React from "react";
import styles from "../RightCarousel.module.css";

const items = [{
    id: 75,
    name: "Cabinet &amp; Wardrobe Magnet",
    "l2": "Magnets",
    "image": "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Cabinet+_+Wardrobe+Magnet/Cabinet_Wardrobe+Magnet.webp"
   },
   {
    id: 76,
    name: "Door Magnet",
    "l2": "Magnets",
    "image": "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+Magnet/Door+Magnet.webp"
   },
   {
    id: 77,
    name: "Push Magnet",
    "l2": "Magnets",
    "image": "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
   },];

const Magnets = () => {
  return (
    <div id={"Magnets"}>
      <div className={styles.itemNameTitle}>
        <h3>Magnets</h3>
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

export default Magnets;
