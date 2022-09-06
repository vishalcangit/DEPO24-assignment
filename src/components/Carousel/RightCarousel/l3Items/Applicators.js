import React from "react";
import styles from "../RightCarousel.module.css";

const items = [{
    id: 96,
    name: "Anti Termite",
    "l2": "Applicators",
    "image": "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
   },
   {
    id: 97,
    name: "Woodfill",
    "l2": "Applicators",
    "image": "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
   },
   {
    id: 98,
    name: "Plywood Coating",
    "l2": "Applicators",
    "image": "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png"
   },]
const Applicators = () => {
    return (
      <div id={"Applicators"}>
        <div className={styles.itemNameTitle}>
          <h3>Applicators</h3>
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
  
  export default Applicators;