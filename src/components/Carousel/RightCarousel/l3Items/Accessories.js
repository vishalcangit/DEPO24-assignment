import React from "react";
import styles from "../RightCarousel.module.css";

const items = [
  {
    id: 1,
    name: "Curtain Brackets",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Curtain+Brackets/Curtain+Brackets.webp",
  },
  {
    id: 2,
    name: "Mirror Cap",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Mirror+Cap/Mirror+Cap.webp",
  },
  {
    id: 3,
    name: "Mirror Holder",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Mirror+holder/Mirror+Holder.webp",
  },
  {
    id: 4,
    name: "Wire Manager",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Wire+Manager/Wire+Manager.webp",
  },
  {
    id: 5,
    name: "Bed Lifter",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Bed+Lifter/Bed+Lifter.webp",
  },
  {
    id: 6,
    name: "Key Hole",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 7,
    name: "Curtain Support",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Curtain+Support/Curtain+Support.webp",
  },
  {
    id: 8,
    name: "Mirror Stud",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Mirror+Stud/Mirror+Stud.webp",
  },
  {
    id: 9,
    name: "Furniture Leg",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Furniture+Leg/Furniture+Leg.webp",
  },
  {
    id: 10,
    name: "Wall Plug",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 11,
    name: "Turn Table",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 12,
    name: "Castor",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Castor/Castor.webp",
  },
  {
    id: 13,
    name: "Ring",
    image:
      "https://depo24-images-shopify.s3.ap-south-1.amazonaws.com/Assets/NO+IMAGE+AVAILABLE.png",
  },
  {
    id: 14,
    name: "Peg (Khutti)",
    image:
      "https://d1xkbitcv5i7vd.cloudfront.net/Assets/Categories+Images/L3+Images/Peg+(Khutti)/Peg+(Khutti).webp",
  },
];

const Accessories = () => {
  return (
    <div id={"Accessories"}>
      <div className={styles.itemNameTitle}>
        <h3>Accessories</h3>
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

export default Accessories;
