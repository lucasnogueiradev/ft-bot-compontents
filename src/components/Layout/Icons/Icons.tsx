import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebookF, FaUser, FaKey } from "react-icons/fa";
import { IconsProps } from "./Types";
const IconGoogle = ({ size }: IconsProps) => {
  return <FcGoogle fontSize="inherit" size={size} color="#000" />;
};

const IconApple = ({ size }: IconsProps) => {
  return <FaApple fontSize="large" size={size} color="black" />;
};

const IconFacebook = ({ size }: IconsProps) => {
  return (
    <FaFacebookF
      fontSize="inherit"
      size={size}
      color="blue"
      style={{ margin: "0 1.5rem" }}
    />
  );
};

const IconFaUser = ({ size }: IconsProps) => {
  return <FaUser fontSize="inherit" size={size} color="black" />;
};

const IconKey = ({ size }: IconsProps) => {
  return <FaKey fontSize="inherit" size={size} color="black" />;
};

export default { IconGoogle, IconApple, IconFacebook, IconFaUser, IconKey };
