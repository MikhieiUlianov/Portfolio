"use client";

import Section from "@/components/general-use/section/section";
import Input from "@/components/UI/input/input";
import StyledButton from "@/components/UI/styled-button/styled-button";

export default function ChangePassModal() {
  return (
    <Section>
      <h2>Change password</h2>
      <h3>Chnage your password to for your account!</h3>
      <form>
        <Input name="name" placeholder="Name" type="email" label="Email" />
        <Input
          name="oldPassword"
          placeholder="Old Password"
          type="password"
          label="Old Password"
        />
        <Input
          name="newPassword"
          placeholder="New Password"
          type="password"
          label="New Password"
        />
        <StyledButton>Update Password</StyledButton>
      </form>
    </Section>
  );
}
