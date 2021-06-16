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
  label: "Name:",
  placeholder: "Bezeichnung",
  value: "",
  type: "text",
};

export const datum = Template.bind({});

datum.args = {
  label: "Datum:",
  placeholder: "01.01.2021",
  value: "",
  type: "text",
};
