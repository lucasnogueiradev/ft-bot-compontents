export interface TitleProps {
  title?: string;
  center?: "center" | "start" | "end";
  font?: "primary" | "secondary";
  size?: number;
}

export interface TextProps {
  text?: string;
  size?: numer;
  font?: "primary" | "secondary";
}

interface LinkProps {
  to: string;
  size?: number;
  handlePasswordClick?: () => void;
  font?: "primary" | "secondary";
  title?: string;
}
