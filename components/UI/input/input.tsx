import { ReactNode } from "react";
import classes from "./input.module.scss";

export default function Input({
  name,
  label,
  placeholder,
  type,
}: {
  name: string;
  label: ReactNode;
  placeholder: string;
  type: string;
}) {
  return (
    <div className={classes.input}>
      <input
        type={type}
        name={name}
        id={name}
        required
        placeholder={placeholder}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
