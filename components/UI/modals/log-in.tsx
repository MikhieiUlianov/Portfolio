"use client";

import Input from "@/components/UI/input/input";
import classes from "./modal-handler.module.scss";
import Link from "next/link";
import { login, LogInFormValues } from "@/actions/log-in";
import ModalTempl from "./form-templ";

export default function LogInModal() {
  return (
    <div>
      <h2>Log in</h2>
      <h3>Log in to access your account!</h3>

      <ModalTempl<LogInFormValues>
        registrationFunc={login}
        redirectPath="/"
        footer={
          <div className={classes.login}>
            Do not have an account?
            <Link href="/?modal=signup">Sign Up</Link>
          </div>
        }
      >
        {({ register, formState: { errors } }) => (
          <>
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
                I agree with <a href="/policy.html">the privacy policy</a>
              </Input>
              <Link
                href="/?modal=change-password"
                className={classes.forgotPass}
              >
                Forgot Password
              </Link>
            </div>
          </>
        )}
      </ModalTempl>
    </div>
  );
}
