import React, { Component } from "react";
import { FontAwesomeIcon, li } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  // faFacebookF,
  // faLinkedin,
  // faGithubSquare,
  // faTwitterSquare,
  // faInstagram
  fab
} from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const Icon = ({ type = "instagram", color = "black", size = "2x" }) => {
  return (
    <div>
      <FontAwesomeIcon icon={["fab", type]} color={color} size={size} />
    </div>
  );
};

export default Icon;
