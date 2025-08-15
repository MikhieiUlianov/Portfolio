"use client";

import Input from "@/components/UI/input/input";
import StyledButton from "@/components/UI/styled-button/styled-button";
import classes from "../modal-handler.module.scss";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignUpModal() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  function onSubmit(formData) {
    console.log(formData);
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
          <a href="/policy.html">the privacy policy</a>
        </Input>

        <StyledButton>Sign Up</StyledButton>
        <div className={classes.login}>
          Already have an account?
          <Link href="/?modal=login">Log In</Link>
        </div>
      </form>
    </div>
  );
}
