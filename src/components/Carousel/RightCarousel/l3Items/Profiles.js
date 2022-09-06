import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    id: 68,
    name: "Shutter Profiles",
    l2: "Profiles",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 69,
    name: "T, U, Profiles",
    l2: "Profiles",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 70,
    name: "Profile Handles",
    l2: "Profiles",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Profile+Handles/Profile+Handles.webp",
  },
];

const Profiles = () => {
  return (
    <div id={"Profiles"}>
      <div className={styles.itemNameTitle}>
        <h3>Profiles</h3>
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

export default Profiles;
