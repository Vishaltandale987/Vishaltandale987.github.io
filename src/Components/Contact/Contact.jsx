import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
import styles from "./Contact.module.css";

const Contact = () => {
  const { newTheme } = React.useContext(ThemeContext);
  return (
    <footer
      className={styles.footer}
      id="contact"
      // style={{ background: `${newTheme.highlightBackground}` }}
    >
      <div className={styles.container}>
        <h1 style={{ color: `${newTheme.title}` }}>Get in Touch</h1>
        <p style={{ color: `${newTheme.para}` }} className={styles.paragraph}>
          I'm actively looking for any new opportunities, in full-stack web
          development.
        </p>
        <div
          style={{ color: `${newTheme.title}` }}
          className={styles.contactOptions}
        >
          <a
            href="tel:8308213384"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
            title="tel:8308213384"
          >
            <i className="fas fa-phone-alt" />
          </a>
          <a
            href="mailto:vishaltandle800@gmail.com"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
            title="vishaltandle800@gmail.com"
          >
            <i className="far fa-envelope"></i>
          </a>

          <a
            href="https://github.com/Vishaltandale987"
            aria-label="GitHub"
            rel="noreferrer"
            target="_blank"
            title="Vishaltandale987"
          >
            <i className="fab fa-github" />
          </a>

          <a
            href="https://www.linkedin.com/in/vishal-tandale-071053234"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer"
            title="vishal-tandale"
          >
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
      <div style={{ background: `${newTheme.line}` }} className={styles.line} />
      <div style={{ color: `${newTheme.para}` }} className={styles.copyright}>
        Designed and build by Vishal Tandale, 2022 All rights reserved.
      </div>
    </footer>
  );
};

export default Contact;
