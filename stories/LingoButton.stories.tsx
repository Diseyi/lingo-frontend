import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LingoButton } from "./LingoButton";

export default {
  title: "Button",
  component: LingoButton,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LingoButton>;

const Template: ComponentStory<typeof LingoButton> = (args) => (
  <LingoButton {...args} />
);

export const Primary = Template.bind({});

// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
