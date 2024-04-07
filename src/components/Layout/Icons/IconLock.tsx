import React from "react";
import { FaLock } from "react-icons/fa";
import { CiLock } from "react-icons/ci";

import { IconsProps } from "./Types";

const IconLock = ({ size }: IconsProps) => {
  return <FaLock fontSize="inherit" size={size} />;
};

export default IconLock;
