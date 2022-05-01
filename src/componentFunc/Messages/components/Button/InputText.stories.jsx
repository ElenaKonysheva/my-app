import React from 'react';
import { InputText } from '../InputText/InputText';

export default {
  title: 'MyComponents/InputText',
  component: InputText,
  argTypes: {
    changeText: { action: 'change' },
    placeholder: '',
  },
};
// не смогла переделать в typescript там надо передавать placeholder так чтобы он был в прототипе но я не поняла как
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
