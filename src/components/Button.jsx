import { Children } from "react";

export const Button = ({ className, size, children }) => {
  return (
    <button>
      <span>{children}</span>
    </button>
  );
};
