import { ReactNode } from "react";

export const Button = ({
  disabled,
  children,
  onClick,
}: {
  disabled: boolean;
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: disabled ? "red" : "blue", color: "white" }}
    >
      {children}
    </button>
  );
};
