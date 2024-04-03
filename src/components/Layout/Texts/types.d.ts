export type TitleProps = {
  title: string;
  center?: "center" | "start" | "end";
};

export type TextTituloProps = {
  text: string;
  size?: numer;
};

interface LinkProps {
  to: string;
  handlePasswordClick?: () => void;
  title?: string; // Change the type of 'title' prop to 'string'
}
