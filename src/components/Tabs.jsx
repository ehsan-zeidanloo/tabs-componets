import React, { useState,useEffect } from "react";
import { contents } from "../constants/data";

import styles from "./Tabs.module.css";

function Tabs() {
  const [id, setId] = useState("1");

  const clickHandler = (e) => {
    const result = e.target.id;
    console.log(typeof result, result);
    setId(result);
    localStorage.setItem("tab",JSON.stringify(result))
  };

  useEffect(() => {
   const storedTab=localStorage.getItem("tab");
if(storedTab){
  setId(JSON.parse(storedTab))
}
  }, [])
  

  const filteredContent = contents.find((content) => content.id === +id);
  return (
    <>
      <div className={styles.container}>
        <h1>Tabs components React</h1>
        <ul onClick={clickHandler}>
          <li id="1">Tab1</li>
          <li id="2">Tab2</li>
          <li id="3">Tab3</li>
          <li id="4">Tab4</li>
        </ul>
      </div>
      <div className={styles.content}>
        {filteredContent ? (
          <div>
            <h2>Content {id}</h2>
            <p>{filteredContent.text}</p>
          </div>
        ) : (
          <p>no content</p>
        )}
      </div>
    </>
  );
}

export default Tabs;
