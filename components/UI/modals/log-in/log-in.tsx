"use client";

import Input from "@/components/UI/input/input";
import StyledButton from "@/components/UI/styled-button/styled-button";
import classes from "../modal-handler.module.scss";
import Link from "next/link";

export default function SignUpModal() {
  return (
    <div>
      <h2>Log in</h2>
      <h3>Log in to access your account!</h3>
      <form>
        <Input
          name="password"
          placeholder="Password"
          type="password"
          label="Password"
        />
        <Input name="email" placeholder="Name" type="email" label="Email" />
        <div className={classes.actions}>
          <div className={classes.policy}>
            <input required type="checkbox" />I agree with
            <a href="/policy.html">the privacy policy</a>
          </div>
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
