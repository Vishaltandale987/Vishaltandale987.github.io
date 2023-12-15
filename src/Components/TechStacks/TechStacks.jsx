import React, { useContext } from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./TechStacks.module.css";

const TechStacks = () => {
  const { newTheme } = useContext(ThemeContext);
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"
      data-aos-duration="800"
    >
      <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
        Skills
      </h1>
      <div className={styles.borderBottom} />
      <div className={styles.container}>
        {/* react */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-react-original colored" />
          <span>React</span>
        </div>

        {/* Next JS */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            style={{ width: "50%" }}
          />
          <span>Next JS</span>
        </div>

        {/* ionic */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class="devicon-ionic-original colored"></i>
          <span>Ionic</span>
        </div>

        {/* Redux */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i style={{ color: "#7248B6" }} className="devicon-redux-original" />
          <span>Redux Toolkit</span>
        </div>
        {/* angular */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class="devicon-angularjs-plain colored"></i>
          <span>Angular</span>
        </div>

        {/* javascript */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-javascript-plain colored" />
          <span>Javascript</span>
        </div>

        {/* typescript */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class="devicon-typescript-plain"></i>

          <span>Typescript</span>
        </div>
        {/* html */}

        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-html5-plain colored" />
          <span>HTML</span>
        </div>
        {/* css */}

        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-css3-plain colored" />
          <span>CSS</span>
        </div>

        {/* bootstrip */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class="devicon-bootstrap-plain"></i>
          <span>Bootstrap</span>
        </div>

        {/* material ui */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class="devicon-materialui-plain"></i>

          <span>MaterialUI</span>
        </div>

        {/* node */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i style={{ color: "#509941" }} className="devicon-nodejs-plain" />
          <span>Node</span>
        </div>

        {/* express */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-express-original" />
          <span>Express</span>
        </div>

        {/* nest js */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class="devicon-nestjs-plain colored"></i>
          <span>Nest JS</span>
        </div>
        
        {/* mongodb */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i className="devicon-mongodb-plain colored" />
          <span>MongoDB</span>
        </div>



        {/* mysql */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class="devicon-mysql-plain-wordmark"></i>

          <span>mysql</span>
        </div>

        {/* github */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class="devicon-github-original"></i>

          <span>Github</span>
        </div>

        {/* gitlab */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class="devicon-gitlab-plain"></i>

          <span>Gitlab</span>
        </div>

        {/* linux */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class="devicon-linux-plain"></i>

          <span>Linux</span>
        </div>

        {/* dooker */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          <i class="devicon-docker-plain"></i>

          <span>Docker</span>
        </div>

        {/* aws */}
        <div
          style={{
            color: `${newTheme.title}`,
            background: `${newTheme.linkHover}`,
          }}
          className={styles.logoWrapper}
        >
          {/* <i class="devicon-docker-plain"></i> */}

          <img
            alt="Aws"
            src="/aws.png"
            style={{
              margin: "6px",
              width: "30px",
              height: "30px",
            }}
          />

          <span>AWS</span>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
