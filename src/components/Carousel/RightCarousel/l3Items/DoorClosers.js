import React from "react";
import styles from "../RightCarousel.module.css";

const items = [{
    id: 71,
    name: "Capsule Door Closer",
    "l2": "Door Closers",
    "image": "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Capsule+Door+Closer/Capsule+Door+Closer.webp"
   },
   {
    id: 72,
    name: "Wooden Door Closer",
    "l2": "Door Closers",
    "image": "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Wooden+Door+Closer/Wooden+Door+Closer.webp"
   },
   {
    id: 73,
    name: "Concealed Door Closer",
    "l2": "Door Closers",
    "image": "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
   },
   {
    id: 74,
    name: "Glass Door Closer",
    "l2": "Door Closers",
    "image": "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
   },];

const DoorClosers = () => {
  return (
    <div id={"Door Closers"}>
      <div className={styles.itemNameTitle}>
        <h3>Door Closers</h3>
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

export default DoorClosers;
