import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "../components/IconButton";

const meta = {
  title: "Text/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconPath: {
      control: "text",
      description: "IconButton에서 사용되는 아이콘 파일의 경로",
    },
    alt: { control: "text", description: "아이콘의 대체 텍스트" },
    onClick: {
      action: "clicked",
      description: "IconButton을 클릭했을 때 호출되는 함수",
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconPath: "https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg",
    alt: "delete-button",
  },
};
