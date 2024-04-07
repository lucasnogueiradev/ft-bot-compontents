import React from "react";
import { FaPhone } from "react-icons/fa6";

import { IconsProps } from "./Types";

const IconPhone = ({ size }: IconsProps) => {
  return <FaPhone fontSize="inherit" size={size} />;
};

export default IconPhone;
