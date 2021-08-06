import React, { useEffect, useState } from "react";
import styles from "./ShareRadar.module.css";
import axios from "axios";

function ShareRadar({
  linearGradient,
  dotsColor,
  iconDisplay,
  btnColor,
  headerMessage,
}) {
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  useEffect(() => {
    const getCoords = async () => {
      await navigator.geolocation.getCurrentPosition((position) => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
      });
    };
    getCoords();
    setInterval(() => {
      getCoords();
    }, 5000);
  }, []);

  const sharePost = async () => {
    await axios.post("http://localhost:5000/radar", {
      latitude,
      longitude,
      timeCreated: `${new Date().getHours()}:${new Date().getMinutes()}`,
    });
  };

  const showLoading = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFetched(true);
    }, 6100);
    await sharePost();
  };

  return (
    <div className={styles.shareRadar}>
      <div className={styles.shareRadarContainer}>
        <div className={styles.shareRadarInnerContainer}>
          <h3>Share your Location</h3>
          <p>{headerMessage}</p>
          <div className={styles.shareBackground}>
            <div
              style={{ color: dotsColor }}
              className={styles.dotsLoader}
            ></div>
          </div>
          <div
            style={{ background: btnColor }}
            onClick={showLoading}
            className={
              !loading
                ? styles.shareLocButton
                : `${styles.shareLocButton} ${styles.shrink}`
            }
          >
            {!fetched ? (
              <i className={iconDisplay}></i>
            ) : (
              <i className="fas fa-check"></i>
            )}
          </div>
        </div>
        {loading && (
          <div className={styles.loadingContainer}>
            <div
              style={{ background: linearGradient }}
              className={styles.loader}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShareRadar;
