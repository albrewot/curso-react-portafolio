import React, { Component } from "react";
import styles from "./Content.module.css";

const Content = ({ userData }) => {
  return (
    <div className={styles.content}>
      <section className={styles.hero}>
        <img
          src={require("../../assets/images/me.png")}
          alt="me"
          className={styles.image}
        />
        <div className={styles.heroContent}>
          <h1>
            {userData.name} <br /> {userData.profession}
          </h1>
          <p>{userData.summary}</p>
          <a href="#" className={styles.actionBtn}>
            Ver CV
          </a>
        </div>
      </section>
    </div>
  );
};

export default Content;
