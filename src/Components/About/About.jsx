import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);
  const [width] = WindowSize();
  const img =
    width < 650
      ? "https://avatars.githubusercontent.com/u/97458887?s=400&u=af43212cf7f93445840e769d575430445a05c66a&v=4" // my Picture
      : "https://www.damiestechnologies.com/img/programmer.gif";
  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}` }}
    >
      <div className={styles.first}>
        <img
          src={"https://msoft.team/wp-content/uploads/2022/09/notebook.jpeg"}
          alt=""
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          Motivated and efficient Full-stack web developer with a history of
          education in Mechanical Engineering and an interest in coding. I have
          worked in collaborative environments demonstrating my coding and
          interpersonal skills to meet deadlines.
          <span style={{ color: `#00a0a0` }}>
            {" "}
            Looking forward to some interesting and challenging opportunities
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
