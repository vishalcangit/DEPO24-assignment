import React from "react";
import styles from "../RightCarousel.module.css";

const items = [{
    id: 60,
    name: "Kitchen Basket",
    "l2": "Kitchen Fittings",
    "image": "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Kitchen+Basket/Kitchen+Basket.webp"
   },
   {
    id: 61,
    name: "Pantry Unit",
    "l2": "Kitchen Fittings",
    "image": "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
   },
   {
    id: 62,
    name: "Tall Unit",
    "l2": "Kitchen Fittings",
    "image": "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
   },
   {
    id: 63,
    name: "Magic Corner",
    "l2": "Kitchen Fittings",
    "image": "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
   },
   {
    id: 64,
    name: "Snake Corner",
    "l2": "Kitchen Fittings",
    "image": "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
   },
   {
    id: 65,
    name: "Pullouts",
    "l2": "Kitchen Fittings",
    "image": "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
   },
   {
    id: 66,
    name: "Kitchen Accessories",
    "l2": "Kitchen Fittings",
    "image": "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
   },
   {
    id: 67,
    name: "Cabinet lifter",
    "l2": "Kitchen Fittings",
    "image": "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
   },];

const KitchenFittings = () => {
  return (
    <div id={"Kitchen Fittings"}>
      <div className={styles.itemNameTitle}>
        <h3>Kitchen Fittings</h3>
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

export default KitchenFittings;
