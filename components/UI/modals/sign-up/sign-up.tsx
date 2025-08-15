"use client";

import Input from "@/components/UI/input/input";
import StyledButton from "@/components/UI/styled-button/styled-button";
import classes from "../modal-handler.module.scss";
import Link from "next/link";

export default function SignUpModal() {
  return (
    <div>
      <h2>Sign up</h2>
      <h3>Sign up to see more content!</h3>
      <form>
        <Input name="name" placeholder="Name" type="text" label="Name" />
        <Input name="email" placeholder="Email" type="email" label="Email" />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          label="Password"
        />
        <Input
          name="confirmPassword"
          placeholder="Confirm password"
          type="password"
          label="Confirm password"
        />
        <div className={classes.policy}>
          <input required type="checkbox" />I agree with
          <a href="/policy.html">the privacy policy</a>
        </div>
        <StyledButton>Sign Up</StyledButton>
        <div className={classes.login}>
          Already have an account?
          <Link href="/?modal=login">Log In</Link>
        </div>
      </form>
    </div>
  );
}
