import React from "react";
import Accessories from "./l3Items/Accessories";
import Adhesives from "./l3Items/Adhesives";
import Applicators from "./l3Items/Applicators";
import DoorClosers from "./l3Items/DoorClosers";
import DoorWindowFitting from "./l3Items/DoorWindowFittings";
import DrawerFittings from "./l3Items/DrawerFittings";
import GlassFittings from "./l3Items/GlassFittings";
import HandlesKnobs from "./l3Items/Handles&Knobs";
import HardwareTools from "./l3Items/HardwareTools";
import Hinges from "./l3Items/Hinges";
import KitchenFittings from "./l3Items/KitchenFittings";
import LampLights from "./l3Items/LampLights";
import Locks from "./l3Items/Locks";
import Magnets from "./l3Items/Magnets";
import Mortise from "./l3Items/Mortise";
import Profiles from "./l3Items/Profiles";
import ScrewNails from "./l3Items/ScrewsNails";
import ShelfSupport from "./l3Items/ShelfSupport";
import Towerbolt from "./l3Items/Towerbolt";
import WardrobeFittings from "./l3Items/WardrobeFittings";
import styles from "./RightCarousel.module.css";

const RightCarousel = () => {
  return (
    <div className={styles.rightCarouselContainer}>
      <Accessories />
      <Hinges />
      <Mortise />
      <HandlesKnobs />
      <Towerbolt />
      <DoorWindowFitting />
      <DrawerFittings />
      <WardrobeFittings />
      <Locks />
      <KitchenFittings />
      <Profiles />
      <DoorClosers />
      <Magnets />
      <GlassFittings />
      <ScrewNails />
      <Adhesives />
      <Applicators />
      <HardwareTools />
      <ShelfSupport />
      <LampLights />
    </div>
  );
};

export default RightCarousel;
