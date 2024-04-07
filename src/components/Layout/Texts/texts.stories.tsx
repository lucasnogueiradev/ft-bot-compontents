import React from "react";
import Link from "./Link";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
const meta = {
  title: "Components/Link",
  component: Link,
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Texto: Story = {
  render: (args) => (
    <BrowserRouter>
      <Link to={args.to} title={args.title} font={args.font} />,
    </BrowserRouter>
  ),
  args: {
    title: "Logar",
    to: "/cadastrar",
    font: "primary",
    // Add the 'to' property with a value
  },
};

// export const Primário: StoryObj = {
//   render: (args) => (
//     <Button primario title="teste" key={""} loading>
//       {args.}
//     </Button>
//   ),
//   args: {
//     title: "Button",
//   },
// };

// export const Secundário: Story = {
//   render: (args) => <Button secundario>{args.children}</Button>,
//   args: {
//     children: "Botão",
//   },
// };

// export const Carregando: Story = {
//   render: (args) => (
//     <Button carregando={args.carregando}>{args.children}</Button>
//   ),
//   args: {
//     children: "Botão",
//     carregando: true,
//   },
// };
