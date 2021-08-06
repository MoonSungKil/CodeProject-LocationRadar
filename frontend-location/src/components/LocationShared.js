import React, { useState } from "react";
import styles from "./LocationShared.module.css";

function LocationShared({ city, time }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className={
        expanded
          ? `${styles.locationShared} ${styles.expand}`
          : styles.locationShared
      }
    >
      <div className={styles.cities}>{city}</div>
      <div className={styles.hiddenInfo}>
        <p className={styles.timedate}>Time & Date Shared:</p>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default LocationShared;
