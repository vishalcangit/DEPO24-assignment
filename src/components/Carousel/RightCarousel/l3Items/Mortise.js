import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    id: 20,
    name: "Mortise Handles",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Mortise+Handles/Mortise+Handles.webp",
  },
  {
    id: 21,
    name: "Lock &amp; Latch Body",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Lock+_+Latch+Body/Lock_Latch+Body.webp",
  },
  {
    id: 22,
    name: "Euro Profile Cylinder",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Euro+Profile+Cylinder/Euro+Profile+Cylinder.webp",
  },
];

const Mortise = () => {
  return (
    <div id={"Mortise"}>
      <div className={styles.itemNameTitle}>
        <h3>Mortise</h3>
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

export default Mortise;
