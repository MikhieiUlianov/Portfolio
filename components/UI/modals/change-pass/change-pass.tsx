"use client";

import Section from "@/components/general-use/section/section";
import Input from "@/components/UI/input/input";
import StyledButton from "@/components/UI/styled-button/styled-button";
import { useForm } from "react-hook-form";
export default function ChangePassModal() {
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
    <Section>
      <h2>Change password</h2>
      <h3>Chnage your password to for your account!</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          placeholder="Name"
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
