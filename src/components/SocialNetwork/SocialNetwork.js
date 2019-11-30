import React, { Component } from "react";
import Icon from "../Icon/Icon";

const SocialNetwork = ({ type, label, color, link }) => {
  return (
    <a href={link}>
      <Icon type={type} color={color} />
      <p style={{ color }}>{label}</p>
    </a>
  );
};

export default SocialNetwork;
