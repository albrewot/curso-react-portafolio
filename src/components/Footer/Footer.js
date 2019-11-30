import React, { Component } from "react";
import styles from "./Footer.module.css";

import SocialNetwork from "../SocialNetwork/SocialNetwork";

const Footer = ({ links }) => {
  return (
    <div className={styles.footer}>
      <footer>
        <ul>
          <li>
            <SocialNetwork
              type="facebook-square"
              color="#3b5998"
              link={links.fbLink}
            />
          </li>
          <li>
            <SocialNetwork
              type="twitter-square"
              color="#1da1f2"
              link={links.twLink}
            />
          </li>
          <li>
            <SocialNetwork
              type="instagram"
              color="#e1306c"
              link={links.igLink}
            />
          </li>
          <li>
            <SocialNetwork
              type="linkedin"
              color="#0077b5"
              link={links.lkLink}
            />
          </li>
          <li>
            <SocialNetwork
              type="github-square"
              color="#333"
              link={links.githubLink}
            />
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
