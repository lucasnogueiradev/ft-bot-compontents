import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IconsProps } from "./Types";

const IconGoogle = ({ size }: IconsProps) => {
  return <FcGoogle fontSize="inherit" size={size} />;
};

export default IconGoogle;
