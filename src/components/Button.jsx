import { Children } from "react";

export const Butoon = ({ className, size, children }) => {
  return (
    <button>
      <span>{children}</span>
    </button>
  );
};
