import React from 'react';

import { InputText } from './InputText';

export default {
  title: 'MyComponents/InputText',
  component: InputText,
  argTypes: {
    changeText: { action: 'change' },
  },
};

const Template = (args) => <InputText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'write your message',
  label: 'InputText',
};

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: '',
  label: 'InputText',
};
