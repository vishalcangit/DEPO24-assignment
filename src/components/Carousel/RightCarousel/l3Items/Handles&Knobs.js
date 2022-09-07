import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    id: 23,
    name: "Cabinet &amp; Window Handles",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Cabinet+_+Window+Handles/Cabinet_Window+Handles.webp",
  },
  {
    id: 24,
    name: "Profile Handles",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Profile+Handles/Profile+Handles.webp",
  },
  {
    id: 25,
    name: "Door Handles",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+Handles/Door+Handles.webp",
  },
  {
    id: 26,
    name: "Concealed/Sliding Handles",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Concealed-Sliding+Handles/Concealed+Sliding+Handles.webp",
  },
  {
    id: 27,
    name: "Knobs",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Knobs/Knobs.webp",
  },
  {
    id: 28,
    name: "Chest Kadi",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Chest+Kadi/Chest+Kadi.webp",
  },
  {
    id: 29,
    name: "Chest Handle",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
];

const HandlesKnobs = () => {
  return (
    <div id={"Handles & Knobs"}>
      <div className={styles.itemNameTitle}>
        <h3>Handles & Knobs</h3>
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

export default HandlesKnobs;
