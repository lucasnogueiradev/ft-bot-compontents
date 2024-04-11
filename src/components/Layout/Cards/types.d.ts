export interface CardCenterProps {
  children: React.ReactNode;
  bg?: "primary" | "secondary" | "tertiary" | "white";
}

export interface CardBetweenProps {
  children: React.ReactNode;
  bg?: "primary" | "secondary" | "tertiary" | "white";
}

export interface CardContainerProps {
  children: React.ReactNode;
  bg?: "primary" | "secondary" | "tertiary" | "white";
}

export interface CardContentProps {
  children: React.ReactNode;
  contentSize?: string;
  bg?: "primary" | "secondary" | "tertiary" | "white";
  containerSize?: string;
  radius?: "left" | "right";
  box?: "none" | "primary" | "secondary";
}
