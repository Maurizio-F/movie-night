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
