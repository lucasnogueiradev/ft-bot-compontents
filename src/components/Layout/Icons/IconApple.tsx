import React from "react";
import { FaApple } from "react-icons/fa";
import { IconsProps } from "./Types";

const IconApple = ({ size }: IconsProps) => {
  return <FaApple fontSize="large" size={size} color="black" />;
};

export default IconApple;
