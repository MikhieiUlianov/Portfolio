import { ReactNode } from "react";
import classes from "./input.module.scss";
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type InputProps<T extends FieldValues> = {
  name: Path<T>;
  type: string;
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
};

type CheckboxProps<T extends FieldValues> = InputProps<T> & {
  children: ReactNode;
};
type DefaultInputProps<T extends FieldValues> = InputProps<T> & {
  label: string;
  placeholder: string;
  extraInputClass?: string;
};

function isCheckbox<T extends FieldValues>(
  props: DefaultInputProps<T> | CheckboxProps<T>
): props is CheckboxProps<T> {
  return "children" in props;
}

export default function Input<T extends FieldValues>(
  props: CheckboxProps<T> | DefaultInputProps<T>
) {
  const { name, type, errors, register } = props;

  const validationLogic: Record<
    string,
    | string
    | {
        value: string | number | RegExp;
        message: string;
      }
  > = {
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
  const InputTag = type === "textarea" ? "textarea" : "input";

  return (
    <div className={classes.input}>
      <InputTag
        className={extraInputClass}
        {...register(name, validationLogic)}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <label htmlFor={name}>{label}</label>

      {errors[name]?.message && (
        <p className={classes.error}>{errors[name]?.message as string}</p>
      )}
    </div>
  );
}
