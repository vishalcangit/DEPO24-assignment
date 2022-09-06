import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    id: 34,
    name: "Aldrop",
    l2: "Door &amp; Window Fittings",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Aldrop/Aldrop.webp",
  },
  {
    id: 35,
    name: "Door Stopper",
    l2: "Door &amp; Window Fittings",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+Stopper/Door+Stopper.webp",
  },
  {
    id: 36,
    name: "Door Eye",
    l2: "Door &amp; Window Fittings",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+Eye/Door+Eye.webp",
  },
  {
    id: 37,
    name: "Door Chain &amp; Guard",
    l2: "Door &amp; Window Fittings",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+Chain+_+Guard/Door+Chain_Guard.webp",
  },
  {
    id: 38,
    name: "Gate Hook",
    l2: "Door &amp; Window Fittings",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Gate+Hook/Gate+Hook.webp",
  },
  {
    id: 39,
    name: "Door Silencer &amp; Buffer",
    l2: "Door &amp; Window Fittings",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+Silencer+_+Buffer/Door+Silencer_Buffer.webp",
  },
  {
    id: 40,
    name: "Door Knocker",
    l2: "Door &amp; Window Fittings",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Door+Knocker/Door+Knocker.webp",
  },
  {
    id: 41,
    name: "Furniture Glide",
    l2: "Door &amp; Window Fittings",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Furniture+Glide/Furniture+Glide.webp",
  },
];

const DoorWindowFitting = () => {
  return (
    <div id={"Door & Window Fittings"}>
      <div className={styles.itemNameTitle}>
        <h3>Door & Window Fittings</h3>
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

export default DoorWindowFitting;
