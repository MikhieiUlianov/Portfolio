"use client";

import Input from "@/components/UI/input/input";
import StyledButton from "@/components/UI/styled-button/styled-button";
import classes from "./modal-handler.module.scss";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { login } from "@/actions/log-in";
import { useState } from "react";
import { useRouter } from "next/navigation";

type LogInFormValues = {
  email: string;
  password: string;
  checkbox: boolean;
};

export default function SignUpModal() {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
  } = useForm<LogInFormValues>();

  async function onSubmit(formData: LogInFormValues) {
    setIsLoading(true);

    const result = await login(formData);

    setIsError(result?.success === false);
    setIsSuccess(result?.success === true);

    if (result?.errors) {
      Object.entries(result.errors).map(([field, value]) => {
        setError(field as keyof LogInFormValues, {
          type: "server",
          message: value,
        });
      });
    } else if (result?.success) {
      reset();
      setTimeout(() => {
        router.push("/");
      }, 5000);
    }

    setIsLoading(false);
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
          placeholder="Email"
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
        {isError && <p style={{ color: "red" }}>Ops! Something went wrong.</p>}
        {isSuccess && (
          <p style={{ color: "green", textAlign: "center" }}>
            Success! now you have access to all futures!
          </p>
        )}
        <StyledButton disabled={isLoading}>Sign Up</StyledButton>
        <div className={classes.login}>
          Do not have an account?
          <Link href="/?modal=signup">Sign Up</Link>
        </div>
      </form>
    </div>
  );
}
