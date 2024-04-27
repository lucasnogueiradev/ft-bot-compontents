import React from "react";
import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primário: Story = {
  render: (args) => (
    <Button backgroundColor={args.backgroundColor} color={args.color}>
      {args.children}
    </Button>
  ),
  args: {
    onClick: () => console.log("Clicou"),
    children: "Button",
    backgroundColor: "primary",
    color: "primary",
  },
};

export const Secondary: Story = {
  render: (args) => (
    <Button backgroundColor={args.backgroundColor} color={args.color}>
      {args.children}
    </Button>
  ),
  args: {
    onClick: () => console.log("Clicou"),
    children: "Button",
    color: "primary",

    backgroundColor: "secondary",
  },
};

export const Tertiary: Story = {
  render: (args) => (
    <Button backgroundColor={args.backgroundColor} color={args.color}>
      {args.children}
    </Button>
  ),
  args: {
    onClick: () => console.log("Clicou"),
    children: "Button",
    backgroundColor: "tertiary",
    color: "primary",
  },
};

export const Onlytext: Story = {
  render: (args) => (
    <Button backgroundColor={args.backgroundColor} color={args.color}>
      {args.children}
    </Button>
  ),
  args: {
    onClick: () => console.log("Clicou"),
    children: "Button",
    backgroundColor: "onlytext",
    color: "secondary",
  },
};
// export const Secundário: Story = {
//   render: (args) => <Button secundario>{args.children}</Button>,
//   args: {
//     children: "Botão",
//   },
// };

export const Loading: Story = {
  render: (args) => <Button loading={args.loading}>{args.children}</Button>,
  args: {
    children: "Botão",
    loading: true,
    color: "primary",
  },
};
