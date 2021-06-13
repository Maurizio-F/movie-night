import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
};

function Button({ children }: ButtonProps): JSX.Element {
  return <button>{children}</button>;
}

export default Button;
