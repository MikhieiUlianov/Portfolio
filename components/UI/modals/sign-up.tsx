"use client";

import Input from "@/components/UI/input/input";
import classes from "./modal-handler.module.scss";
import Link from "next/link";
import { signup, SignUpFormValues } from "@/actions/sign-up";
import ModalTempl from "./form-templ";

export default function SignUpModal() {
  return (
    <div>
      <h2>Sign up</h2>
      <h3>Sign up to see more content!</h3>
      <ModalTempl<SignUpFormValues>
        registrationFunc={signup}
        redirectPath="/"
        footer={
          <div className={classes.login}>
            Already have an account?
            <Link href="/?modal=login">Log In</Link>
          </div>
        }
      >
        {({ register, formState: { errors } }) => {
          return (
            <>
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
            </>
          );
        }}
      </ModalTempl>
    </div>
  );
}
