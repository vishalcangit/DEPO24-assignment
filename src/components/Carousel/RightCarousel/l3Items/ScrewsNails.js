import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    id: 82,
    name: "Nails",
    l2: "Screws &amp; Nails",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 83,
    name: "Pan Slotted",
    l2: "Screws &amp; Nails",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 84,
    name: "CSK Wooden",
    l2: "Screws &amp; Nails",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 85,
    name: "CSK Slotted",
    l2: "Screws &amp; Nails",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 86,
    name: "CSK Phillips",
    l2: "Screws &amp; Nails",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 87,
    name: "Pan Phillips",
    l2: "Screws &amp; Nails",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 88,
    name: "Machine Screws",
    l2: "Screws &amp; Nails",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 89,
    name: "Carriage Bolt",
    l2: "Screws &amp; Nails",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 90,
    name: "Drywall/Gypsum Screw",
    l2: "Screws &amp; Nails",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 91,
    name: "Self Drilling Screw",
    l2: "Screws &amp; Nails",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 92,
    name: "Panel Pin",
    l2: "Screws &amp; Nails",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 93,
    name: "Full Cut Screw",
    l2: "Screws &amp; Nails",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
];

const ScrewNails = () => {
  return (
    <div id={"Screws & Nails"}>
      <div className={styles.itemNameTitle}>
        <h3>Screws & Nails</h3>
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

export default ScrewNails;
