import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./AllShares.module.css";
import LocationShared from "./LocationShared";

function Navbar() {
  const [activated, setActivated] = useState(false);
  const [sharedPosts, setSharedPosts] = useState([]);

  useEffect(() => {
    const getShares = async () => {
      const { data } = await axios.get("http://localhost:5000/radar");
      setSharedPosts([...data]);
    };

    getShares();
  }, []);

  const radars = sharedPosts.map((radar, index) => {
    return (
      <LocationShared key={index} city={radar.city} time={radar.timeCreated} />
    );
  });

  return (
    <div className={styles.navbar}>
      <div
        className={
          !activated
            ? `${styles.navbarRadar} ${styles.active}`
            : styles.navbarRadar
        }
      >
        <div
          onClick={() => {
            setActivated(false);
          }}
          className={
            !activated
              ? `${styles.shareBtn} ${styles.activeBtn}`
              : styles.shareBtn
          }
        >
          Radar
        </div>
        <div className={styles.listRadar}>{radars}</div>
      </div>
      <div
        className={
          activated
            ? `${styles.navbarIncident} ${styles.active}`
            : styles.navbarIncident
        }
      >
        <div
          onClick={() => {
            setActivated(true);
          }}
          className={
            activated
              ? `${styles.incidentBtn} ${styles.activeBtn}`
              : styles.incidentBtn
          }
        >
          Incidents
        </div>
        <div className={styles.listIncidents}></div>
      </div>
    </div>
  );
}

export default Navbar;
