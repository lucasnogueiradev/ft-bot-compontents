import React from "react";
import { IconsProps } from "./Types";
import { FaFacebookF } from "react-icons/fa";

const IconFacebook = ({ size }: IconsProps) => {
  return (
    <FaFacebookF
      fontSize="inherit"
      size={size}
      style={{ margin: "0 1.5rem", color: "blue" }}
    />
  );
};

export default IconFacebook;
