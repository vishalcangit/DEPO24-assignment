import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "../../LeftCarousel/LeftCarousel.module.css";

const homeDecorItems = ["Lamp & Lights"];
const HomeDecor = () => {
  const [showDropdown, setShowDropdown] = useState("false");

  return (
    <div>
      <h4
        onClick={() => setShowDropdown(!showDropdown)}
        className={styles.l1Title}
      >
        HomeDecor
        <span>
          {!showDropdown ? (
            <i class="fa fa-angle-up" aria-hidden="true"></i>
          ) : (
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          )}
        </span>
      </h4>
      {!showDropdown &&
        homeDecorItems.map((item) => (
          <Link
            className={styles.links}
            to={item}
            smooth={true}
            offset={200}
            duration={500}
          >
            {item}
          </Link>
        ))}
    </div>
  );
};

export default HomeDecor;
