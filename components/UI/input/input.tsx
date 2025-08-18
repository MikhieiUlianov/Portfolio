import { ReactNode } from "react";
import classes from "./input.module.scss";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type InputProps = {
  name: string;
  type: string;
  errors: FieldErrors;
  register: UseFormRegister<any>;
};

type CheckboxProps = InputProps & { children: ReactNode };
type DefaultInputProps = InputProps & {
  label: string;
  placeholder: string;

  extraInputClass?: string;
};

function isCheckbox(
  props: DefaultInputProps | CheckboxProps
): props is CheckboxProps {
  return "children" in props;
}

export default function Input({ ...props }: CheckboxProps | DefaultInputProps) {
  const { name, type, errors, register } = props;

  let validationLogic: Record<string, any> = {
    required: "The field is required.",
  };

  if (type === "text") {
    validationLogic.minLength = {
      value: 2,
      message: "Name must have at least 2 characters.",
    };
    validationLogic.maxLength = {
      value: 30,
      message: "Name cannot have more than 30 characters.",
    };
  }

  if (type === "email") {
    validationLogic.pattern = {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Enter a valid email address.",
    };
  }

  if (type === "password") {
    validationLogic.minLength = {
      value: 8,
      message: "Password must be at least 8 characters long.",
    };
    validationLogic.pattern = {
      value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      message:
        "Password must contain at least one uppercase letter, one number, and one special character.",
    };
  }

  if (isCheckbox(props)) {
    const { children } = props;
    return (
      <div className={classes.policy}>
        <div>
          <input
            type="checkbox"
            {...register(name, { required: "You must agree" })}
          />
          {children}
        </div>
        {errors[name]?.message && (
          <p className={classes.error}>{errors[name]?.message as string}</p>
        )}
      </div>
    );
  }
  const { placeholder, label, extraInputClass } = props;

  const Input = type === "textarea" ? "textarea" : "input";

  return (
    <div className={classes.input}>
      <Input
        className={extraInputClass}
        {...register(name, validationLogic)}
        type={type}
        name={name}
        /*   id={name} */
        placeholder={placeholder}
      />
      <label htmlFor={name}>{label}</label>

      {errors[name]?.message && (
        <p className={classes.error}>{errors[name]?.message as string}</p>
      )}
    </div>
  );
}
