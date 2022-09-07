import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    id: 15,
    name: "L Hinges",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/L+Hinges/L+Hinges.webp",
  },
  {
    id: 16,
    name: "W Hinges",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/W+Hinges/W+Hinges.webp",
  },
  {
    id: 17,
    name: "Z Hinges",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Z+Hinges/Z+Hinges.webp",
  },
  {
    id: 18,
    name: "Auto Hinges",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Auto+Hinges/Auto+Hinges.webp",
  },
  {
    id: 19,
    name: "Door &amp; Window Hinges",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door_Window+Hinges/Door_Window+Hinges.webp",
  },
];

const Hinges = () => {
  return (
    <div id={"Hinges"}>
      <div className={styles.itemNameTitle}>
        <h3>Hinges</h3>
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

export default Hinges;
