export interface CardCenterProps {
  children: React.ReactNode;
  bg?: "primary" | "secondary";
}

export interface CardBetweenProps {
  children: React.ReactNode;
  bg?: "primary" | "secondary";
}

export interface CardContainerProps {
  children: React.ReactNode;
  bg?: "primary" | "secondary";
}

export interface CardContentProps {
  children: React.ReactNode;
  contentSize?: string;
  bg?: "primary" | "secondary";
  containerSize?: string;
  radius?: "left" | "right";
}
