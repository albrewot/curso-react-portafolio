import React, { Component } from "react";
import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";

export default class SideBar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <nav>
          <ul>
            <li>
              {/* <a href="#">About</a> */}
              <Link to="/">Inicio</Link>
            </li>
            <li>
              {/* <a href="#">Portfolio</a> */}
              <Link to="/edit">Editar</Link>
            </li>
            <li>
              {/* <a href="#">Contact</a> */}
              <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li>
              {/* <a href="#">Editar</a> */}
              <Link to="/Contact">Contactame</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
