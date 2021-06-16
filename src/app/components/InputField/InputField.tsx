import React from "react";
import styles from "./InputField.module.css";

export type InputFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  type: string;
  required: boolean;
  onChange: (value: string) => void;
};

function InputField({
  label,
  placeholder,
  value,
  type,
  required,
  onChange,
}: InputFieldProps): JSX.Element {
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.label__input}
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

export default InputField;
