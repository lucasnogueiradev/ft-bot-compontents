import React from "react";
import { IconsProps } from "./Types";
import { FaKey } from "react-icons/fa";

const IconKey = ({ size }: IconsProps) => {
  return <FaKey fontSize="inherit" size={size} />;
};

export default IconKey;
