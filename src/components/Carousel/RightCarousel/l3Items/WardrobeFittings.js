import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    id: 46,
    name: "Hanger Pipe",
    l2: "Wardrobe Fittings",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 47,
    name: "Sliding Wardrobe Fitting",
    l2: "Wardrobe Fittings",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 48,
    name: "Rod Stay",
    l2: "Wardrobe Fittings",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 49,
    name: "Lift Up",
    l2: "Wardrobe Fittings",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 50,
    name: "Tie Rod",
    l2: "Wardrobe Fittings",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 51,
    name: "Socket",
    l2: "Wardrobe Fittings",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
];

const WardrobeFittings = () => {
  return (
    <div id={"Wardrobe Fittings"}>
      <div className={styles.itemNameTitle}>
        <h3>Wardrobe Fittings</h3>
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

export default WardrobeFittings;
