import React, { useState } from "react";
import styles from "../../LeftCarousel/LeftCarousel.module.css";
const furnitureItems = [
  "Accessories",
  "Hinges",
  "Mortise",
  "Handles & Knobs",
  "Towerbolt",
  "Door & Window Fittings",
  "Drawer Fittings",
  "Wardrobe Fittings",
  "Locks",
  "Kitchen Fittings",
  "Profiles",
  "Door Closers",
  "Magnets",
  "Glass Fittings",
  "Screws & Nails",
  "Adhesives",
  "Applicators",
  "Hardware Tools",
  "Shelf Support",
];
const FurnitureFittings = () => {
  const [showDropdown, setShowDropdown] = useState("false");

  console.log(furnitureItems);
  return (
    <div>
      <h4
        onClick={() => setShowDropdown(!showDropdown)}
        className={styles.l1Title}
      >
        FurnitureFittings
        <span>
          {!showDropdown ? (
            <i class="fa fa-angle-up" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          )}
        </span>
      </h4>
      {!showDropdown &&
        furnitureItems.map((item) => <p className={styles.l2Title}>{item}</p>)}
    </div>
  );
};

export default FurnitureFittings;
