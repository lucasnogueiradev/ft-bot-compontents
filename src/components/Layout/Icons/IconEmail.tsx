import React from "react";
import { IconsProps } from "./Types";
import { MdEmail } from "react-icons/md";

const IconEmail = ({ size }: IconsProps) => {
  return <MdEmail fontSize="inherit" size={size} />;
};

export default IconEmail;
