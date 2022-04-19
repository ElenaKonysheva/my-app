import React from 'react';

import { Button } from './Button';

export default {
  title: 'MyComponents/Button',
  component: Button,
  argTypes: {
    clickDelete: { action: 'click' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: true,
  label: 'Button',
};
