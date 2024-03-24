import type { Meta, StoryObj } from "@storybook/react";

import { within, userEvent } from "@storybook/test";

import { expect } from "@storybook/test";

import LoginForm from "../components/LoginForm";

const meta: Meta<typeof LoginForm> = {
  title: "Forms/LoginForm",
  parameters: {
    layout: "centered",
  },
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const EmptyForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByTestId("email");
    await expect(emailInput).toBeInTheDocument();

    const passwordInput = canvas.getByTestId("password");
    await expect(passwordInput).toBeInTheDocument();

    const loginButton = canvas.getByRole("button", { name: "로그인" });

    await expect(loginButton).toBeDisabled();
  },
};

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const emailInput = canvas.getByTestId("email");
    await userEvent.type(emailInput, "test@email.com");

    const passwordInput = canvas.getByTestId("password");
    await userEvent.type(passwordInput, "a-random-password");

    const loginButton = canvas.getByRole("button", { name: "로그인" });

    await expect(loginButton).toBeEnabled();
  },
};
