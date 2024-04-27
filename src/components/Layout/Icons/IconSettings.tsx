import React from "react";
import { RiUserSettingsLine } from "react-icons/ri";

import { IconsProps } from "./Types";

const IconSettings = ({ size }: IconsProps) => {
  return <RiUserSettingsLine fontSize="inherit" size={size} />;
};

export default IconSettings;
