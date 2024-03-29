import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import PrimaryButton from "../components/PrimaryButton";

const meta = {
  title: "Buttons/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{ width: "360px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    theme: {
      control: {
        type: "select",
        options: ["dark", "light", "social", "text"],
      },
      description: "버튼 테마",
      defaultValue: "dark",
    },
    children: {
      control: "text",
      description: "버튼 text",
      defaultValue: "icon",
    },
    disabled: {
      control: "boolean",
      description: "버튼 비활성화 여부",
      defaultValue: true,
    },

    onClick: { action: "clicked", description: "버튼 클릭 이벤트" },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  args: {
    children: "Button",
    theme: "dark",
    disabled: false,
  },
};

export const Light: Story = {
  args: {
    children: "Button",
    theme: "light",
    disabled: false,
  },
};

export const Social: Story = {
  args: {
    children: "Button",
    theme: "social",
    disabled: false,
  },
};

export const Text: Story = {
  args: {
    children: "Button",
    theme: "text",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    theme: "dark",
    disabled: true,
  },
};
