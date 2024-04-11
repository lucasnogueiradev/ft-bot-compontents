import React from "react";
import Modal from "./index";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primário: Story = {
  args: {
    isOpen: true,
    children: "Modal",
  },
  render: (args) => (
    <>
      <Modal isOpen={true} OnRequestClose={() => {}} onOpen={() => true}>
        {args.children}
      </Modal>
      <button onClick={() => true}>Open Modal</button>
    </>
  ),
};
