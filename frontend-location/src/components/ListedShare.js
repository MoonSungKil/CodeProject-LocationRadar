import React, { useState } from "react";
import styles from "./ListedShare.module.css";
import Navbar from "./AllShares";

function ListedShare() {
  const [toggleBtn, setToggleBtn] = useState(false);

  return (
    <div
      className={
        !toggleBtn
          ? styles.listedShares
          : `${styles.listedShares} ${styles.show}`
      }
    >
      <div onClick={() => setToggleBtn(!toggleBtn)} className={styles.toggle}>
        <i className="fas fa-bars"></i>
      </div>
      <Navbar />
    </div>
  );
}

export default ListedShare;
