import React from "react";

type InputFieldProps = {
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
    <label>
      {label}
      <input
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
