"use client";

import Input from "@/components/UI/input/input";
import StyledButton from "@/components/UI/styled-button/styled-button";
import classes from "./modal-handler.module.scss";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signup, SignUpFormValues } from "@/actions/sign-up";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpModal() {
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignUpFormValues>();

  async function onSubmit(formData: SignUpFormValues) {
    setIsLoading(true);
    const result = await signup(formData);
    setIsError(result.success === false);
    setIsSuccess(result.success === true);
    if (result?.errors) {
      Object.entries(result.errors).forEach(([field, message]) => {
        setError(field as keyof SignUpFormValues, { type: "server", message });
      });
    } else if (result.success) {
      reset();
      setTimeout(() => {
        router.push("/");
      }, 5000);
    }
    setIsLoading(false);
  }
  return (
    <div>
      <h2>Sign up</h2>
      <h3>Sign up to see more content!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          placeholder="Name"
          type="text"
          label="Name"
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
        <Input
          name="password"
          placeholder="Password"
          type="password"
          label="Password"
          register={register}
          errors={errors}
        />
        <Input
          name="confirmPassword"
          placeholder="Confirm password"
          type="password"
          label="Confirm password"
          register={register}
          errors={errors}
        />
        <Input
          name="checkbox"
          type="checkbox"
          register={register}
          errors={errors}
        >
          I agree with
          <Link href="/policy">the privacy policy</Link>
        </Input>

        <StyledButton disabled={isLoading}>Sign Up</StyledButton>
        {isError && <p style={{ color: "red" }}>Ops! Something went wrong.</p>}
        {isSuccess && (
          <p style={{ color: "green", textAlign: "center" }}>
            Success! now you have access to all futures!
          </p>
        )}
        <div className={classes.login}>
          Already have an account?
          <Link href="/?modal=login">Log In</Link>
        </div>
      </form>
    </div>
  );
}
