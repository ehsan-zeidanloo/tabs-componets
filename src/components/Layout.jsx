import React from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <p> Botostart.ir | product Page </p>
      </header>

      {children}
      <footer className={styles.footer}>
        <p>Develope By Ehsan With ❤️ </p>
      </footer>
    </>
  );
}

export default Layout;
