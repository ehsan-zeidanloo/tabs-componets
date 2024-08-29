import React from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h2> Ehsan Academy || React Course </h2>
      </header>

      {children}
      <footer className={styles.footer}>
        <p>Develope By Ehsan With ❤️ </p>
      </footer>
    </>
  );
}

export default Layout;
