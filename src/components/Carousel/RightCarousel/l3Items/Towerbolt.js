import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    name: "Door & Window Towerbolt",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+_+Window+Towerbolt/Door_Window+Towerbolt.webp",
  },
  {
    name: "Auto Towerbolt",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Auto+Towerbolt/Auto+Towerbolt.webp",
  },
  {
    name: "Marble & L Towerbolt",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Marble+_+L+Towerbolt/Marble_L+Towerbolt.webp",
  },
  {
    name: "Concealed Towerbolt",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
];

const Towerbolt = () => {
  return (
    <div id={"Towerbolt"}>
      <div className={styles.itemNameTitle}>
        <h3>Towerbolt</h3>
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

export default Towerbolt;
