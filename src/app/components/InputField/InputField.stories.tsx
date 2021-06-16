import React from "react";
import InputField, { InputFieldProps } from "./InputField";
import { Story } from "@storybook/react";

export default {
  title: "Component/InputField",
  component: InputField,
};

const Template: Story<InputFieldProps> = (args) => <InputField {...args} />;

export const name = Template.bind({});

name.args = {
  label: "string",
  placeholder: "string",
  value: "string",
  type: "string",
};

export const datum = (): JSX.Element => (
  <InputField
    label="Datum:"
    placeholder="01.01.2021"
    type="text"
    value=""
    required={true}
    onChange={console.log}
  />
);
