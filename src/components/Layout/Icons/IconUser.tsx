import React from "react";
import { FaUser } from "react-icons/fa";

import { IconsProps } from "./Types";

const IconUser = ({ size }: IconsProps) => {
  return <FaUser fontSize="inherit" size={size} />;
};

export default IconUser;
