import type { StorybookConfig } from "@storybook/react-vite";
import type { AddonOptionsVite } from "@storybook/addon-coverage";



const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    //👈 The a11y addon goes here
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    //👈 Registers the addon
    "@storybook/addon-coverage",
    "@storybook/addon-mdx-gfm"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  core: {},
};
export default config;
