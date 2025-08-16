"use client";

import Input from "@/components/UI/input/input";
import StyledButton from "@/components/UI/styled-button/styled-button";
import classes from "../modal-handler.module.scss";
import Link from "next/link";
import { useForm } from "react-hook-form";

type LogInFormValues = {
  email: string;
  password: string;
  checkbox: boolean;
};

export default function SignUpModal() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<LogInFormValues>();
  function onSubmit(formData: LogInFormValues) {
    console.log(formData);
  }
  return (
    <div>
      <h2>Log in</h2>
      <h3>Log in to access your account!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="password"
          placeholder="Password"
          type="password"
          label="Password"
          register={register}
          errors={errors}
        />
        <Input
          name="email"
          placeholder="Name"
          type="email"
          label="Email"
          register={register}
          errors={errors}
        />
        <div className={classes.actions}>
          <Input
            name="checkbox"
            type="checkbox"
            register={register}
            errors={errors}
          >
            I agree with
            <a href="/policy.html">the privacy policy</a>
          </Input>
          <Link href="/?modal=change-password" className={classes.forgotPass}>
            Forgot Password
          </Link>
        </div>
        <StyledButton>Sign Up</StyledButton>
        <div className={classes.login}>
          Do not have an account?
          <Link href="/?modal=signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}
