import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'MyComponents/Button',
  component: Button,
  argTypes: {
    clickDelete: { action: 'click' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: true,
};
