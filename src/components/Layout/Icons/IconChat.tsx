import React from "react";
import { IoChatbox } from "react-icons/io5";

import { IconsProps } from "./Types";

const IconChat = ({ size }: IconsProps) => {
  return <IoChatbox fontSize="large" size={size} />;
};

export default IconChat;
