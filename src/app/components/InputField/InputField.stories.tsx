import React from "react";
import InputField from "./InputField";

export default {
  title: "Component/InputField",
  component: InputField,
};

export const name = (): JSX.Element => (
  <InputField
    label="Name:"
    placeholder="Bezeichnung"
    type="text"
    value=""
    required={true}
    onChange={console.log}
  />
);
