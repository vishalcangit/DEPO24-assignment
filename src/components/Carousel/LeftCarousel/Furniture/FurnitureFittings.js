import React, { useRef, useState } from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
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
        furnitureItems.map((item) => (
          <a href={`#${item}`} className={styles.links}>
            {item}
          </a>
        ))}
    </div>
  );
};

export default FurnitureFittings;
