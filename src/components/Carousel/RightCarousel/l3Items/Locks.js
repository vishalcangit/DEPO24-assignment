import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    id: 52,
    name: "Multi Lock",
    l2: "Locks",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Multi+Lock/Multi+Lock.webp",
  },
  {
    id: 53,
    name: "Dead Lock",
    l2: "Locks",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Dead+Lock/Dead+Lock.webp",
  },
  {
    id: 54,
    name: "Cupboard Lock",
    l2: "Locks",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Cupboard+Lock/Cupboard+Lock.webp",
  },
  {
    id: 55,
    name: "Bar Lock",
    l2: "Locks",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 56,
    name: "Sliding Lock",
    l2: "Locks",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Sliding+Lock/Sliding+Lock.webp",
  },
  {
    id: 57,
    name: "Pad Lock",
    l2: "Locks",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Padlock/Pad+Lock.webp",
  },
  {
    id: 58,
    name: "Cylindrical Lock",
    l2: "Locks",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Cylindrical+Lock/Cylindrical+Lock.webp",
  },
  {
    id: 59,
    name: "Ducting Lock",
    l2: "Locks",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
];

const Locks = () => {
  return (
    <div id={"Locks"}>
      <div className={styles.itemNameTitle}>
        <h3>Locks</h3>
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

export default Locks;
