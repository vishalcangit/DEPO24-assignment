import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    id: 42,
    name: "Telescopic Channel",
    l2: "Drawer Fittings",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Telescopic+Channel/Telescopic+Channel.webp",
  },
  {
    id: 43,
    name: "Quadro",
    l2: "Drawer Fittings",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 44,
    name: "Roller Channel",
    l2: "Drawer Fittings",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Roller+Channel/Roller+Channel.webp",
  },
  {
    id: 45,
    name: "Tandem Box",
    l2: "Drawer Fittings",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
];

const DrawerFittings = () => {
  return (
    <div id={"Drawer Fittings"}>
      <div className={styles.itemNameTitle}>
        <h3>Drawer Fittings</h3>
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

export default DrawerFittings;
