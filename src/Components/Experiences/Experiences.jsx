import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Experiences.module.css";

const Experiences = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div className="ab">
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Experience
      </h1>
      <div className={styles.borderBottom} />

      <div className={styles.container}>
        <div className={styles.position}>
          Jr. Full-Stack Developer
          <br />
          <a href="https://celestiq.com/" style={{ marginTop: "10px" }}>
            Celestiq Datatech Pvt. Ltd.
          </a>
        </div>
        <div className={styles.date}>Present - July 2023 </div>
        <div className={styles.date}>
          Location - Hinjawadi, Pune, Maharashtra
        </div>
        <fieldset className={styles.responsibilites}>
          <legend>
            <h3> Roles & responsibilites </h3>
          </legend>
          <ul>
            <li>
              Designed Robust Warehouse Racking System, BOM it's manufacturing
              processes.
            </li>
            <li>Handled Quality Inspection and Testing Process.</li>
            <li>Software - Creo | AutoCAD</li>
          </ul>
        </fieldset>
      </div>

      <br />

      <div className={styles.container}>
        <div className={styles.position}>
          Design Engineering <br />
          <a href="/" style={{ marginTop: "10px" }}>
            RECO STORAGE SYSTEMS PVT. LTD.
          </a>
        </div>
        <div className={styles.date}>April 2022 – May 2021</div>
        <div className={styles.date}>Location - Chakan, Pune, Maharashtra</div>
        <fieldset className={styles.responsibilites}>
          <legend>
            <h3> Roles & responsibilites </h3>
          </legend>
          <ul>
            <li>
              Designed Robust Warehouse Racking System, BOM it's manufacturing
              processes.
            </li>
            <li>Handled Quality Inspection and Testing Process.</li>
            <li>Software - Creo | AutoCAD</li>
          </ul>
        </fieldset>
      </div>
    </div>
  );
};

export default Experiences;
