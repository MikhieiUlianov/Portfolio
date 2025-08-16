"use client";

import Section from "@/components/general-use/section/section";
import Input from "@/components/UI/input/input";
import StyledButton from "@/components/UI/styled-button/styled-button";
import { useForm } from "react-hook-form";

type ChangePassFormValues = {
  email: string;
  password: string;
  checkbox: boolean;
};

export default function ChangePassModal() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ChangePassFormValues>();

  function onSubmit(formData: ChangePassFormValues) {
    console.log(formData);
  }
  return (
    <Section>
      <h2>Change password</h2>
      <h3>Chnage your password to for your account!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          placeholder="Email"
          type="email"
          label="Email"
          register={register}
          errors={errors}
        />
        <Input
          name="oldPassword"
          placeholder="Old Password"
          type="password"
          label="Old Password"
          register={register}
          errors={errors}
        />
        <Input
          name="newPassword"
          placeholder="New Password"
          type="password"
          label="New Password"
          register={register}
          errors={errors}
        />
        <StyledButton>Update Password</StyledButton>
      </form>
    </Section>
  );
}
